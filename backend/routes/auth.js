const express = require("express");
const router = express.Router();
const { sendOTP } = require("../utils/emailService");
const crypto = require("crypto");
const pool = require("../config/db");
const os = require("os");

function getLocalIP() {
  const networkInterfaces = os.networkInterfaces();
  let ip;
  for (let interfaceName in networkInterfaces) {
    networkInterfaces[interfaceName].forEach((network) => {
      if (network.family === "IPv4" && !network.internal) {
        if (!ip) {
          ip = network.address;
          console.log(ip);
        }
      }
    });
  }
  return ip;
}

router.get("/get-ip", (req, res) => {
  const ip = getLocalIP(); // Llamas a la función para obtener la IP
  res.json({ ip });
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await pool.query(
      "SELECT * FROM usuario WHERE correo = ? and clave = sha2(?, 256)",
      [email, password]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const user = rows[0];
    if (user.status === 0) {
      return res.status(401).json({ message: "Usuario desactivado" });
    }

    res.json({ message: "Inicio de sesión exitoso", email });
  } catch (error) {
    res.status(500).json({ message: "Error del servidor" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const [existingUsers] = await pool.query(
      "SELECT * FROM usuario WHERE correo = ?",
      [email]
    );

    if (existingUsers.length > 0) {
      const user = existingUsers[0];
      if (user.status === 0) {
        // Reactivar usuario
        await pool.query(
          "UPDATE usuario SET status = 1, clave = sha2(?, 256) WHERE correo = ?",
          [password, email]
        );
        return res.json({ message: "Usuario reactivado exitosamente", email });
      } else {
        return res.status(400).json({ message: "El usuario ya existe" });
      }
    }

    // Crear nuevo usuario
    await pool.query(
      "INSERT INTO usuario (correo, clave, status) VALUES (?, sha2(?,256), 1)",
      [email, password]
    );
    res.json({ message: "Usuario registrado exitosamente", email });
  } catch (error) {
    res.status(500).json({ message: "Error del servidor" });
  }
});

router.post("/delete-account", async (req, res) => {
  try {
    const { email } = req.body;
    await pool.query("UPDATE usuario SET status = 0 WHERE correo = ?", [email]);
    res.json({ message: "Cuenta desactivada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error del servidor" });
  }
});

module.exports = router;

// Store OTP codes temporarily (in production, use Redis or similar)
const otpStore = new Map();

router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const [users] = await pool.query("SELECT * FROM usuario WHERE correo = ?", [
      email,
    ]);

    if (users.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Generate OTP
    const otp = crypto.randomInt(100000, 999999).toString();

    // Store OTP with expiration
    otpStore.set(email, {
      code: otp,
      expiry: Date.now() + 15 * 60 * 1000, // 15 minutes
    });

    // Send OTP via email
    await sendOTP(email, otp);

    res.json({ message: "Código de verificación enviado al correo" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al enviar el código de verificación" });
  }
});

router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;
    const storedOTP = otpStore.get(email);

    if (!storedOTP) {
      return res.status(400).json({ message: "Código expirado o inválido" });
    }

    if (Date.now() > storedOTP.expiry) {
      otpStore.delete(email);
      return res.status(400).json({ message: "Código expirado" });
    }

    if (storedOTP.code !== otp) {
      return res.status(400).json({ message: "Código incorrecto" });
    }

    // Clear OTP after successful verification
    otpStore.delete(email);
    res.json({ message: "Código verificado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al verificar el código" });
  }
});

router.post("/reset-password", async (req, res) => {
  try {
    const { email, password } = req.body;
    await pool.query(
      "UPDATE usuario SET clave = sha2(?, 256) WHERE correo = ?",
      [password, email]
    );
    res.json({ message: "Contraseña actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la contraseña" });
  }
});

module.exports = router;
