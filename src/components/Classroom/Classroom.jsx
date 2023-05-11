import React, { useEffect, useState } from "react";
import "./classroom.css";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CLASS } from "../../utils/urls";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Classroom() {
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(CLASS.replace(":id", params.id))
      .then((res) => setData(res.data.data.attributes.rooms.data));
  }, []);
  console.log(data);
  return (
    <Layout>
      <div className="classroom">
        {data &&
          data.map((item) => (
            <div className="classroom_card" key={item.id}>
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
                <h3>
                  <FaBed fill={"gold"} /> {item.attributes.bed} Bed |
                  <FaBath fill={"gold"} /> {item.attributes.bath} Bath |
                  <FaWifi fill={"gold"} /> {item.attributes.wifi}
                </h3>
                <p>{item.attributes.about}</p>
                <br />
                <div className="card_room-buttons">
                  <Link to={`/room-detail/${item.id}`}>
                    <button className="allRoom_btn">Wiev Detail</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
}
