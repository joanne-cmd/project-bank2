import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
          <span className="option-one" onClick={handleLogout}>
            Welcome <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
