import React from "react";

export default function Unauthorized() {
    return (
        <div className="error-div">
            <img src="https://i.pinimg.com/originals/33/42/e4/3342e4ba684ff017acff7382cad86c7f.jpg" />
            <h1>Unauthorized!</h1>
            <a href="/login">
                <button className="btn btn-primary">Go to Login</button>
            </a>
        </div>
    )
}