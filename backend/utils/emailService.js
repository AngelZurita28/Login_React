const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "af3392976@gmail.com", // Replace with your email
    pass: "cart hedh diax mljo", // Replace with your app password
  },
});

const sendOTP = async (email, otp) => {
  const mailOptions = {
    from: "af3392976@gmail.com",
    to: email,
    subject: "Código de recuperación de contraseña",
    html: `
      <h1>Recuperación de Contraseña</h1>
      <p>Tu código de verificación es: <strong>${otp}</strong></p>
      <p>Este código expirará en 15 minutos.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendOTP };
