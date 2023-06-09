import React from "react";
import { FaHotel } from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";
import { TbId, TbSwimming } from "react-icons/tb";
import { MdSportsKabaddi } from "react-icons/md";
import { GiGlassCelebration } from "react-icons/gi";
import { CgGym } from "@react-icons/all-files/cg/CgGym";
import "./services.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./Data";
import { Link } from "react-router-dom";
import About from "../About/About";

export default function Services(props) {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      description={item.description}
      key={item.id}
    />
  ));

  return (
    <section className="services_section" id="services">
      <div className="container2">
        <h4>OUR SERVICES</h4>
        <h1>
          Explore Our <span>SERVICES</span>
        </h1>
        <div className="row">
          <div className="service">
            <Link to="all-rooms">
              <figure className="icon">
                <FaHotel />
              </figure>
            </Link>
            <h3>Rooms & Appartment</h3>
            <br />
            <p>
              The comfortable stay of our guests is very important for us, we
              hope that you will be satisfied with our services. We love and are
              proud of our work and will do our best to make .
            </p>
          </div>
          <div className="service">
            <a href="#menu">
              <figure className="icon">
                <BiRestaurant />
              </figure>
            </a>
            <h3>Food & Restaurant</h3>
            <br />
            <p>
              I hope you like our food. Our food is sweeter and cheaper than
              others.
            </p>
          </div>
          <div className="service">
            <Link to="/pool">
              <figure className="icon">
                <TbSwimming />
              </figure>
            </Link>
            <h3>Pools</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              repellendus perferendis molestias! Excepturi?
            </p>
          </div>
          <div className="service">
            <figure className="icon">
              <MdSportsKabaddi />
            </figure>
            <h3>Sport & Gaming</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              repellendus perferendis molestias! Excepturi?
            </p>
          </div>
          <div className="service">
            <figure className="icon">
              <GiGlassCelebration />
            </figure>
            <h3>Event & Party</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              repellendus perferendis molestias! Excepturi?
            </p>
          </div>
          <div className="service">
            <figure className="icon">
              <CgGym />
            </figure>
            <h3>GYM & Yoga</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              repellendus perferendis molestias! Excepturi?
            </p>
          </div>
        </div>
        <div className="slider_image">
          <div className="slider">
            <Carousel showDots={false} responsive={responsive}>
              {product}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
