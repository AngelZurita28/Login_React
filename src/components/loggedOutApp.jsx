import React from "react";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import LoginForm from "../loginComponents/LoginForm";
import RegisterForm from "../loginComponents/RegisterForm";
import ForgotPassword from "../loginComponents/ForgotPassword";
import VerifyOTP from "../loginComponents/VerifyOTP";
import ResetPassword from "../loginComponents/ResetPassword";

export function LoggedOutApp({ onLogin }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<LoginForm onLogin={onLogin} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
