import React from "react";
import "./pool.css";
import { AiFillStar } from "react-icons/ai";

function Pool({ item }) {
  return (
      <div className="pool__section">
        
        <div className="pool__footer">
          <div className="pool__footer-content">
            <h1>{item.attributes.title}</h1>
            <div className="pool__content-top__stars">
              
            </div>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <h3>{item.attributes.price} $</h3>
            {/* <button className="pool__footer-content__btn">
              BOOKING
            </button> */}
          </div>
          <div className="pool_img">
            <img
              src={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`}
              alt=""
            />
          </div>
        </div>
      </div>
  );
}

export default Pool;
