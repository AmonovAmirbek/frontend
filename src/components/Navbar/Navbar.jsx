import React from "react";
import "./navbar.css";
import { Link, Navigate } from "react-router-dom";
import { AiFillCaretDown } from 'react-icons/ai';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">HOTELIER</h1>
        <div className="navbar_end">
          <a className="item">HOME</a>
          <a className="item">ABOUT</a>
          <a className="item">SERVICES</a>
          <a className="item">ROOMS</a>
          <a className="item">PAGES</a>
          <div class="dropdown">
            <button class="dropbtn">
              <AiFillCaretDown/>
            </button>
            <div class="dropdown-content">
              <a href="#">Booking</a>
              <a href="#">Our Team</a>
              <a href="#">Testimonial</a>
            </div>
          </div>
          {/* <a className="item">PAGES</a> */}
          <a className="item">CONTACT</a>

        </div>
        <Link to="/sign-in"><button className="navbar_button">Login</button></Link>  
      </nav>
    </div>
  );
}
