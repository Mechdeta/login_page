import React, { useState } from "react";
import "./LoginSignUp.css";

import user_icon from "../Assests/person.png";
import email_icon from "../Assests/email.png";
import password_icon from "../Assests/password.png";

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Sign Up" && (
            <div className="input">
              <img src={user_icon} alt="User Icon" />
              <input type="text" placeholder="Full Name" />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="Email Icon" />
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="input">
            <img src={password_icon} alt="Password Icon" />
            <input type="password" placeholder="Password" />
          </div>
        </div>

        {action === "Login" && (
          <div className="forgot-password">
            Forgot Password? <span>Click here!</span>
          </div>
        )}

        <div className="submitContainer">
          <div
            className={action === "Sign Up" ? "submit active" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Login" ? "submit active" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
