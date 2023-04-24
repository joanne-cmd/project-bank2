import React, { useState } from "react";
import "./login.css"; // Import the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Extract the domain from the email address
    const domain = email.split("@")[1];

    if (domain === "admin.com" && password === "admin123") {
      alert("Admin login successful"); // Show success message
      // Redirect to admin dashboard
      window.location.href = "/admin-dashboard";
    } else if (domain === "student.com" && password === "student123") {
      alert("Student login successful"); // Show success message
      // Redirect to student dashboard
      window.location.href = "/student-dashboard";
    } else {
      alert("Login failed");
    }
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }
    // Handle password reset logic here
    alert("Password reset successful!");
    setResetPassword(false);
  };

  return (
    <div className="login">
      <h1 className="login-heading">Login</h1>
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
  );
};

export default Login;
