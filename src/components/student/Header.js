import "./Header.css";
import Sidebar from "../sidebar/Sidebar";
import Course from "../course/Course";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header({ currentUser }) {
  console.log(currentUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    // perform logout logic here
    navigate("/logout"); // navigate to the logout page
  };

  return (
    <>
      <div className="header">
        <img
          src="https://moringaschool.com/wp-content/uploads/2022/02/cropped-favicon-32x32.png"
          alt="logo"
        />
        <h2 className="title__h">Pay-Bank</h2>

        <div className="header-nav">
          {Array.isArray(currentUser) ? (
            <span className="option-one" onClick={handleLogout}>
              Welcome {currentUser[0].username}
            </span>
          ) : (
            <span className="option-one">Not Logged In</span>
          )}
        </div>
      </div>

      <Sidebar />
      <Course />
      <Footer />
    </>
  );
}

export default Header;
