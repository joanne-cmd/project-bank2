import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./login.css"; 
import Sidebar from "../sidebar/Sidebar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [newPassword, setNewPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // Use navigate from react-router-dom for programmatic navigation

  const handleLogin = async () => {
    const domain = email.split("@")[1];

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Login successful");
        if (domain === "admin.com") {
          navigate("/cohort-form"); 
        } else if (domain === "student.com") {
          navigate("/add-project");
        }
      } else {
        alert("Login failed");
      }
    } catch (error) {
      alert("Login failed");
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await fetch("http://localhost:3000/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Password reset successful!");
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
      <h1 className="login-heading">Login</h1>
      
      <Sidebar/>
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
            <label className="login-label">New Password:</label>
            <input
              className="login-input"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <br />
            <label className="login-label">Confirm Password:</label>
            <input
              className="login-input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
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
