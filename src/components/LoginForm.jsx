import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("userEmail", email);
      navigate("/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Error al iniciar sesión");
    }
  };

  const handleNavigateToRegister = () => {
    navigate("/register");
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
            Iniciar Sesión
          </h2>
          {error && (
            <div
              className="alert"
              style={{
                backgroundColor: "#3a3a3a",
                color: "#ff6b6b",
                border: "none",
              }}
              role="alert"
            >
              {error}
            </div>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
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
            <div className="mb-3">
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
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "#4caf50",
                  color: "#ffffff",
                  border: "none",
                }}
              >
                Iniciar Sesión
              </button>
              <button
                type="button"
                onClick={handleNavigateToRegister}
                className="btn"
                style={{
                  backgroundColor: "#3a3a3a",
                  color: "#ffffff",
                  border: "none",
                }}
              >
                Ir a Registro
              </button>
            </div>
            <div className="text-center mt-3">
              <Link
                to="/forgot-password"
                className="text-decoration-none"
                style={{ color: "#4fc3f7" }}
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
