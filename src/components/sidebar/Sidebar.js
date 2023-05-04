import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faBriefcase,
  faEnvelope,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <h2>Student</h2>
        </li>
        <li className="options">
          <NavLink to="/course">
            <FontAwesomeIcon icon={faChartLine} /> <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="options">
          <NavLink to="/projects">
            <FontAwesomeIcon icon={faBriefcase} /> <span>Projects</span>
          </NavLink>
        </li>

        <li className="options">
          <NavLink to="/contact">
            <FontAwesomeIcon icon={faEnvelope} /> <span>Messages</span>
          </NavLink>
        </li>

        <li className="auth-options">
          <NavLink to="/logout">
            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
