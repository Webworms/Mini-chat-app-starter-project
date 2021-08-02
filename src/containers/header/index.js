import React from "react";
import Logo from "../../images/logo.png";
import User from '../../images/user.jpg';
import { FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  return (
    <div className="chatscreen-header d-flex justify-content-between">
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className="right_wrapper">
        {/* DP */}
        <div className="user_info">
          <img src={User} />
          <span className="username">John</span>
        </div>
        {/* Dropdown */}
        <button
          type="button"
          className="btn btn-light dropdown-toggle dropdown-toggle-split"
        >
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
}
