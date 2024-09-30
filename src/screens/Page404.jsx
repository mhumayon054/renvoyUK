import React from "react";
import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();
  return (
    <div className="error-div">
      <img src="images/404.jpg" className="error_image"/>
      <h1>Oops Page not found!</h1>
      <button className="btn btn-danger" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
}
