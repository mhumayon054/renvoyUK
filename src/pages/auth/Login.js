import React from "react";
import LoginPage from "../../components/LoginPage";
// import { useAuth } from "../../hook/useAuth";
import { Navigate } from "react-router-dom";

export default function Login() {
  // useAuth();
  return (
    <div className="Login_page">
      <LoginPage />
    </div>
  );
}
