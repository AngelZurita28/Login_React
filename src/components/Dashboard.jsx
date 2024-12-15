import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.post(
        `http://${localStorage.getItem(
          "localIp"
        )}:3000/api/auth/delete-account`,
        {
          email,
        }
      );
      localStorage.removeItem("userEmail");
      navigate("/");
    } catch (error) {
      console.error("Error al eliminar la cuenta:", error);
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
        <div className="card-body text-center">
          <h2 className="card-title mb-4" style={{ color: "#ffffff" }}>
            Bienvenido {email}
          </h2>
          <div className="d-grid gap-3">
            <button
              onClick={handleLogout}
              className="btn"
              style={{
                backgroundColor: "#3a3a3a",
                color: "#ffffff",
                border: "none",
                padding: "10px",
              }}
            >
              Cerrar Sesión
            </button>
            <button
              onClick={handleDeleteAccount}
              className="btn"
              style={{
                backgroundColor: "#d32f2f",
                color: "#ffffff",
                border: "none",
                padding: "10px",
              }}
            >
              Eliminar Cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
