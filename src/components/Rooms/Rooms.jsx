import React, { useEffect, useState } from "react";
import Room from "../Room/Room";
import "./rooms.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Rooms() {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/classes?populate=rooms&populate=image")
      .then((res) => setClasses(res.data.data));
  }, []);
  console.log(classes);
  return (
    <div className="rooms" id="rooms">
      <div className="rooms__section-header">
        <h4>___OUR CLASSES___</h4>
        <h1>
          Explore Our <span>Classes</span>
        </h1>
      </div>
      <div className="rooms__section-content">
        {classes && classes.map((item) => <Room item={item} key={item.id}/>)}
      </div>

      <div className="rooms__footer">
        <div className="rooms__footer-content">
          <h3>___LUXURY LIVING</h3>
          <h1>
            Discover A Brand <br /> Luxurious Hotel
          </h1>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <Link to="/all-rooms">
          <button className="rooms__footer-content__btn first">
            OUR ROOMS
          </button>
          </Link>
          <button className="rooms__footer-content__btn">BACK A ROOM</button>
        </div>
        <div className="rooms__footer-img">
          <img
            src="https://fullmedia.ru/uploaded/b7afbaec/edc2ac85/2fce8b31/351da60c.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Rooms;
