import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail");

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  const handleDeleteAccount = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth/delete-account", {
        email,
      });
      localStorage.removeItem("userEmail");
      navigate("/");
    } catch (error) {
      console.error("Error al eliminar la cuenta:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Bienvenido {email}
        </h2>
        <div className="space-y-4">
          <button
            onClick={handleLogout}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Cerrar Sesión
          </button>
          <button
            onClick={handleDeleteAccount}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          >
            Eliminar Cuenta
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
