import React from "react";

export default function Unauthorized() {
    return (
        <div className="error-div">
            <img src="images/403.jpg" className="error_image"/>
            <h1>Unauthorized!</h1>
            <a href="/login">
                <button className="btn btn-danger">Go to Login</button>
            </a>
        </div>
    )
}