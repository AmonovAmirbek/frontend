import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default Header;

function Header(props) {
  return (
    <div className="header">
      <p>LUXURY LIVING</p>
      <h1>Discover A Brand</h1>
      <h1>Luxurious Hotel</h1>
      <div className="buttons">
        <a href="#rooms"><button className="button header_btn" type="submit">OUR CLASS</button></a>
        <a href="#menu"><button className="button">OUR RESTORAN</button></a>
      </div>
    </div>
  );
}
