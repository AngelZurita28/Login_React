import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem("resetEmail");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await axios.post(
        `http://${localStorage.getItem(
          "localIp"
        )}:3000/api/auth/reset-password`,
        {
          email,
          password,
        }
      );

      localStorage.removeItem("resetEmail");
      navigate("/");
    } catch (error) {
      setError(
        error.response?.data?.message || "Error al actualizar la contraseña"
      );
    }
  };

  // Validación para habilitar el botón
  useEffect(() => {
    if (password && confirmPassword && password === confirmPassword) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [password, confirmPassword]);

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#121212" }}
    >
      <div
        className="card shadow-lg"
        style={{
          width: "24rem",
          backgroundColor: "#1e1e1e",
          color: "#e0e0e0",
          border: "none",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <div className="card-body text-center">
          <h2 className="card-title mb-4" style={{ color: "#ffffff" }}>
            Nueva Contraseña
          </h2>
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
              style={{
                backgroundColor: "#f44336",
                borderColor: "#d32f2f",
                color: "#ffffff",
              }}
            >
              {error}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="mb-4" style={{ width: "100%" }}>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                style={{ color: "#e0e0e0" }}
              >
                Nueva Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                style={{
                  backgroundColor: "#2d2d2d",
                  color: "#e0e0e0",
                  textAlign: "center",
                  border: "none",
                  borderRadius: "8px",
                  margin: "0 5px",
                  outline: "none",
                  boxShadow: "none",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                required
              />
            </div>
            <div className="mb-6" style={{ width: "100%" }}>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                style={{ color: "#e0e0e0" }}
              >
                Confirmar Contraseña
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                style={{
                  backgroundColor: "#2d2d2d",
                  color: "#e0e0e0",
                  textAlign: "center",
                  border: "none",
                  borderRadius: "8px",
                  margin: "0 5px",
                  outline: "none",
                  boxShadow: "none",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                required
              />
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              style={{
                backgroundColor: isFormValid ? "#4CAF50" : "#2d2d2d", // Color cuando es válido vs. inválido
                color: "#ffffff",
                border: "none",
                padding: "10px",
                borderRadius: "8px",
                fontWeight: "bold",
                width: "calc(100% - 24px)",
                margin: "0 12px",
                marginTop: "16px", // Agrega separación en la parte superior del botón
                cursor: isFormValid ? "pointer" : "not-allowed",
                transition: "background-color 0.3s ease",
              }}
            >
              Actualizar Contraseña
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
