import React from "react";
import "./room.css";
import { FaBed } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaBath } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";

const Room = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/class-room/${item.id}`}>
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
        <FaBed fill={"gold"} /> {item.attributes.rooms.data[0].attributes.bed}{" "}
        Bed |
        <FaBath fill={"gold"} /> {item.attributes.rooms.data[0].attributes.bath}{" "}
        Bath |
        <FaWifi fill={"gold"} />
        <p>
          Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
          diam stet diam sed stet lorem.
        </p>
        <br />
        <div className="card__content-buttons">
          <Link to={`/class-room/${item.id}`}>
            <button className="room_btn">pass to rooms</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Room;
