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
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>
          <span>HOTELIER</span>
        </h3>

        <p class="footer-links">
          <a href="#" class="link-1">
            Home
          </a>

          <a href="#">About</a>

          <a href="#">Services</a>

          <a href="#">Rooms</a>

          <a href="#">Contact</a>
        </p>

        <p class="footer-company-name">HOTELIER © 2015</p>
      </div>

      <div class="footer-center">
        <div>
            
          <p>
          <FiMapPin /> <span>Zulfiya ko'chasi</span> Bukhara Region, Uzbekistan
          </p>
        </div>
        <br />

        <div>
          <p> <BsFillTelephoneFill />     
            +998936224020</p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">
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
