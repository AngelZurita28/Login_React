import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://${localStorage.getItem("localIp")}:3000/api/auth/register`,
        {
          email,
          password,
        }
      );

      localStorage.setItem("userEmail", email);
      navigate("/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Error al registrarse");
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
            Registrarse
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
            <div className="mb-4">
              <label
                htmlFor="password"
                className="form-label"
                style={{ color: "#e0e0e0" }}
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                Registrarse
              </button>
            </div>
            <div className="text-center mt-3">
              <a href="/" style={{ color: "#90caf9", textDecoration: "none" }}>
                ¿Ya tienes cuenta? Inicia sesión aquí
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
