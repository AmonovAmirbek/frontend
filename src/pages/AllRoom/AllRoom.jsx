import React from "react";
import './allRoom.css'
import { Link } from "react-router-dom";
import { FaBed } from "react-icons/fa";
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
            <h2>{item.attributes.price} $</h2>
          </div>
        </div>
        <br />
        <h3><FaBed fill={"gold"} /> {item.attributes.bed} Bed  |
         <FaBath fill={"gold"} />  {item.attributes.bath} Bath |
        <FaWifi fill={"gold"} />  {item.attributes.wifi.true}</h3>
        <p>
          {item.attributes.about}
        </p>
        <br />
        <div className="card_room-buttons">
        <Link to={`/room-detail/${item.id}`}>
          <button className="allRoom_btn">Wiev Detail</button>
        </Link>
        </div>
      </div>
    </div>
  );
}
