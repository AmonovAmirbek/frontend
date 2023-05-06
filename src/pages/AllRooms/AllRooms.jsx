import React, { useState, useEffect } from "react";
import "./allRooms.css";
import axios from "axios";
import AllRoom from "../AllRoom/AllRoom";
import Layout from "../../components/Layout/Layout";

export default function AllRooms() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/rooms?populate=class&populate=image&populate=wifi&populate=order_room")
      .then((res) => setRooms(res.data.data));
  }, []);
  console.log(rooms);
  return (
    <Layout>
      <div className="rooms_section">
        <div className="rooms_header">
          <h4>___OUR ROOMS___</h4>
          <h1>
            Explore Our <span>ROOMS</span>
          </h1>
        </div>
        <div className="rooms__section">
          {rooms && rooms.map((item) => <AllRoom item={item} key={item.id}/>)}
          
        </div>
      </div>
    </Layout>
  );
}
