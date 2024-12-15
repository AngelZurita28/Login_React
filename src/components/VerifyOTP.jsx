import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function VerifyOTP() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const email = localStorage.getItem("resetEmail");

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    // Verifica si el valor ingresado es un dígito
    if (/^\d{0,1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Si se ingresó un valor, mueve el foco al siguiente input
      if (value && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convierte el arreglo otp en una cadena de texto
    const otpString = otp.join("");

    try {
      // Envia la solicitud con la cadena de OTP
      await axios.post(
        `http://${localStorage.getItem("localIp")}:3000/api/auth/verify-otp`,
        {
          email,
          otp: otpString, // Envia el OTP como una cadena
        }
      );
      navigate("/reset-password");
    } catch (error) {
      setError(error.response?.data?.message || "Error al verificar el código");
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

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
            Verificar Código
          </h2>
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
              style={{
                color: "#fff",
                backgroundColor: "#ff0000",
                borderColor: "#ff3333",
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
            <div className="mb-4" style={{ display: "flex", gap: "10px" }}>
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  value={otp[index] || ""}
                  onChange={(e) => handleInputChange(e, index)}
                  maxLength="1"
                  className="otp-input"
                  style={{
                    backgroundColor: "#2d2d2d",
                    color: "#e0e0e0",
                    textAlign: "center",
                    width: "40px",
                    height: "40px",
                    fontSize: "20px",
                    borderRadius: "8px",
                    margin: "0 5px",
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full"
              style={{
                backgroundColor: isOtpComplete ? "#6441a5" : "#3a3a3a",
                color: "#ffffff",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                fontWeight: "bold",
                width: "calc(100% - 24px)",
                margin: "0 12px",
                cursor: isOtpComplete ? "pointer" : "not-allowed",
                opacity: isOtpComplete ? 1 : 0.6,
              }}
              disabled={!isOtpComplete}
            >
              Verificar Código
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifyOTP;
