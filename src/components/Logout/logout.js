import React from "react";
import "./logout.css"; // Import CSS file for styling
import { Link } from "react-router-dom";
const LogoutForm = ({ handleLogout }) => {
  return (
    <div className="logout-form-container">
      
      <div className="form-container">
<<<<<<< HEAD
=======
        <h2 className="goingout">Logout</h2>
>>>>>>> 73a42aaac353a0343c09ed5f98bff1e2979e9541
        <form onSubmit={handleLogout} className="logout-form">
          <p className="paragraph">Are you sure you want to logout?</p>
          <Link to="/"><button className="btnn__logout" type="submit">Logout</button> </Link>
        </form>
      </div>
    </div>
  );
};

export default LogoutForm;
