import React from "react";
import "./logout.css"; // Import CSS file for styling

const LogoutForm = ({ handleLogout }) => {
  return (
    <div className="logout-form-container">
      <div className="form-container">
        <h2>Logout</h2>
        <form onSubmit={handleLogout} className="logout-form">
          <p>Are you sure you want to logout?</p>
          <button type="submit">Logout</button>
        </form>
      </div>
    </div>
  );
};

export default LogoutForm;
