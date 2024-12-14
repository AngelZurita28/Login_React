import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/auth/forgot-password", {
        email,
      });
      localStorage.setItem("resetEmail", email);
      setSuccess("Código enviado al correo");
      setTimeout(() => {
        navigate("/verify-otp");
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || "Error al enviar el código");
    }
  };

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
        }}
      >
        <div className="card-body">
          <h2
            className="card-title text-center mb-4"
            style={{ color: "#ffffff" }}
          >
            Recuperar Contraseña
          </h2>
          {error && (
            <div
              className="alert mb-4"
              style={{
                backgroundColor: "#3a3a3a",
                color: "#ff6b6b",
                border: "none",
                padding: "10px",
                textAlign: "center",
              }}
            >
              {error}
            </div>
          )}
          {success && (
            <div
              className="alert mb-4"
              style={{
                backgroundColor: "#3a3a3a",
                color: "#81c784",
                border: "none",
                padding: "10px",
                textAlign: "center",
              }}
            >
              {success}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="form-label"
                style={{ color: "#e0e0e0" }}
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                style={{
                  backgroundColor: "#2a2a2a",
                  color: "#ffffff",
                  border: "1px solid #3a3a3a",
                }}
                required
              />
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "#4caf50",
                  color: "#ffffff",
                  border: "none",
                  padding: "10px",
                }}
              >
                Enviar Código
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
