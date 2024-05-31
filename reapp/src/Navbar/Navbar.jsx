import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../assets/home-icon (2).svg";
import menu from "../assets/three-horizontal-lines-icon.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
          <span>LexEstates</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/list">Lists</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/agents">Agents</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="John.jpg" alt="" />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup" className="register">
              Sign Up
            </Link>
          </>
        )}
        <div className="MenuIcon">
          <img src={menu} alt="" onClick={() => setOpen((prev) => !prev)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
