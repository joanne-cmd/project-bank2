import React from "react";
import "./logout.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
const LogoutForm = ({ handleLogout }) => {
  return (
    <div className="logout-form-container">
      
      <div className="form-container">
        <form onSubmit={handleLogout} className="logout-form">
          <p>Are you sure you want to logout?</p>
          <Link to="/"><button type="submit">Logout</button> </Link>
        </form>
      </div>
    </div>
  );
};

export default LogoutForm;
