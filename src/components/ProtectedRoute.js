import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();

  // if (!user) {
  //     return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  if (!user) {
    return <Navigate to="/" />;
  }

  if (user.role && !allowedRoles?.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;
