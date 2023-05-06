import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span>HOTELIER</span>
        </h3>

        <div className="footer-links">
          <a href="#header">Home</a>

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#rooms">Classes</a>

          <a href="#menu">Menu</a>
        </div>

        <p className="footer-company-name">HOTELIER © 2015</p>
      </div>

      <div className="footer-center">
        <div>
          <p>
            <FiMapPin /> <span>Wall Street, </span>New York, USA
          </p>
        </div>
        <br />

        <div>
          <p>
            {" "}
            <BsFillTelephoneFill />
            +998936224020
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Alique
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet"
        </p>

        <div className="footer-icons">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <BsTwitter />
          </a>
          <a href="#">
            <AiFillInstagram />
          </a>
          <a href="#">
            <FaTelegramPlane />
          </a>
          <a href="#">
            <AiFillYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
