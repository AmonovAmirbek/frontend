import React from "react";
import "./navbar.css";

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
          <div class="dropdown">
            <button class="dropbtn">PAGES
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Booking</a>
              <a href="#">Our Team</a>
              <a href="#">Testimonial</a>
            </div>
          </div>
          {/* <a className="item">PAGES</a> */}
          <a className="item">CONTACT</a>

          <button className="button" type="button">
            PREMIUM VERSION
          </button>
        </div>
      </nav>
    </div>
  );
}
