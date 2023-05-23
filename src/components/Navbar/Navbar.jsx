import React from "react";
import "./navbar.css";
import { Link, Navigate } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <div>
      <nav className="navbar">
        <Link to='/'>
          <h1 className="logo">HOTELIER</h1>
        </Link>
        <div className="navbar_end">
          <a className="item" href="http://localhost:3000/my-orders">
            MY ORDERS
          </a>
          <a className="item" href="http://localhost:3000">
            HOME
          </a>
          <a className="item" href="#about">
            ABOUT
          </a>
          <a className="item" href="#services">
            SERVICES
          </a>
          <a className="item" href="http://localhost:3000/all-rooms">
            ROOMS
          </a>
          <a className="item">PAGES</a>
          <div className="dropdown">
            <button className="dropbtn">
              <AiFillCaretDown />
            </button>
            <div className="dropdown-content">
              <Link to="/booking">Booking</Link>
              <a href="#team">Our Team</a>
              <a href="#menu">Menu</a>
            </div>
          </div>
          <a href="http://localhost:3000/pool" className="item nav_item">
            POOL
          </a>
        </div>
        <Link to="/sign-in">
          <button className="navbar_button">{user ? "Log out" : "Login"}</button>
        </Link>
      </nav>
    </div>
  );
}
