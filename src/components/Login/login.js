import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

import axios from "axios"; // Import axios for making HTTP requests

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();


  const handleLogin = async () => {
    // Extract the domain from the email address
    const domain = email.split("@")[1];

    console.log(email);
    console.log(password);

    try {
      // Make HTTP request to backend for login
      const response = await axios.post("/login", {
        email,
        password,
      });
      console.log(response.data.email.split("@")[1]);
      if (response.data.email.split("@")[1] === "student.moringaschool.com") {
        alert("Login successful");
        localStorage.setItem("user", response.data.email);
        window.location.href = "/course";
      } else if (
        response.data.email.split("@")[1] === "admin.moringaschool.com"
      ) {
        alert("Login successful");
        localStorage.setItem("user", response.data.email);
        // console.log("admin ", user);

        window.location.href = "/cohorts"

      } else {
        alert("Login failed");
      }
    } catch (error) {
      alert("Login failed");
    }
  };

  const handleResetPassword = async () => {
  console.log(email)
  console.log(type)
    try {
      // Make HTTP request to backend for password reset
      const response = await axios.post(
        "http://127.0.0.1:3000/password_reset",
        {
          email,
          type,
        }
      );
      console.log(response.status)
      if (response.status === 200) {
        alert("Password reset successful!");
        navigate("/login");
        setResetPassword(false);

      } else {
        alert("Password reset failed");
        
      }
    } catch (error) {
      alert("Password reset failed");
    }
  };

  return (
    <>
      <h1 className="login-heading">Welcome :)</h1>
      <div className="login">
        <form className="login-form">
          <label className="login-label">Email:</label>
          <input
            className="login-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          {!resetPassword && (
            <>
              <label className="login-label">Password:</label>
              <input
                className="login-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
            </>
          )}
          {resetPassword ? (
            <>
              <label className="login-label">Enter Role:</label>
              <input
                className="login-input"
                type="password"
                value={type}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <br />
      
            <br />
            <button
              className="login-button"
              type="button"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>
            <br />
          </>
        ) : (
          <>
            <button
              className="login-button"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
            <br />
            <button
              className="login-button"
              type="button"
              onClick={() => setResetPassword(true)}
            >
              Forgot Password
            </button>
            <br />
            <label className="login-label">
              <input
                className="login-checkbox"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
          </>
        )}
      </form>
    </div>
    </>
    
  );
};

export default Login;