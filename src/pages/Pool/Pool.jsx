import React from "react";
import "./pool.css";
import { AiFillStar } from "react-icons/ai";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Pool(props) {
  return (
    <>
        <Navbar/>
      <div className="pool__section">
        <div className="pool__section-header">
          <h1>
            Explore Our <span>POOLS</span>
          </h1>
        </div>
        <div className="pool__footer">
          <div className="pool__footer-content">
            <h1>
              Star Pool <br />
              Luxury
            </h1>
            <div className="pool__content-top__stars">
              <AiFillStar fill={"gold"} size={30} />
              <AiFillStar fill={"gold"} size={30} />
              <AiFillStar fill={"gold"} size={30} />
            </div>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>{" "}
            <h3>45$</h3>
            <button className="pool__footer-content__btn">
              ORDER FOR 1 HOUR
            </button>
          </div>
          <div className="pool_img">
            <img
              src="https://i.pinimg.com/originals/ff/ea/97/ffea973b363048100451d088cfd28111.jpg"
              alt=""
            />
          </div>
        </div>{" "}
        <br />
        <div className="pool__footer">
          <div className="pool__footer-content">
            <h1>
              Extra Pool <br />
              Luxury
            </h1>
            <div className="card__content-top__stars">
              <AiFillStar fill={"gold"} size={30} />
              <AiFillStar fill={"gold"} size={30} />
              <AiFillStar fill={"gold"} size={30} />
              <AiFillStar fill={"gold"} size={30} />
              <AiFillStar fill={"gold"} size={30} />
            </div>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>{" "}
            <h3>45$</h3>
            <button className="pool__footer-content__btn">
              ORDER FOR 1 HOUR
            </button>
          </div>
          <div className="pool_img">
            <img
              src="https://i.pinimg.com/originals/5a/7a/70/5a7a70888e16c25e51bc18a0352a95f6.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Pool;
