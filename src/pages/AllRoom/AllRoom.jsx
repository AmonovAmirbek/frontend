import React from "react";
import './allRoom.css'
import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaBath } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";

export default function AllRoom({ item }) {
  return (
    <div className="allrooms_card">
      <Link to={`/room-detail/${item.id}`}>
      <img
        src={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`}
        alt=""
      />
      </Link>
      <div className="card__content">
        <div className="card__content-top">
          <h4>
            <b>{item.attributes.title}</b>
          </h4>
          <div className="card__content-top__stars">
            <AiFillStar fill={"gold"} size={30} />
            <AiFillStar fill={"gold"} size={30} />
            <AiFillStar fill={"gold"} size={30} />
            <AiFillStar fill={"gold"} size={30} />
            <AiFillStar fill={"gold"} size={30} />
          </div>
        </div>
        <br />
        <FaBed fill={"gold"} /> {item.attributes.bed}
        Bed  |
         <FaBath fill={"gold"} />  {item.attributes.bath}
        Bath |
        <FaWifi fill={"gold"} />  {item.attributes.wifi.true}
        <p>
          Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
          diam stet diam sed stet lorem.
        </p>
        <br />
        <div className="card_room-buttons">
        <Link to="/room-detail/:id">
          <button className="allRoom_btn">Wiev Detail</button>
        </Link>
        </div>
      </div>
    </div>
  );
}
