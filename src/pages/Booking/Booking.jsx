import React, { useState, useEffect } from "react";
import "./booking.css";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { ORDER } from "../../utils/urls";
import { Link, Navigate } from "react-router-dom";
import { openPopup, closePopup } from "./script";
import { GiCoffin } from "react-icons/gi";
import { CLASS } from "../../utils/urls";

function Booking() {

  return (
    <div className='booking__section'>
      <h4>_____ROOM BOOKING_____</h4 >
      <h1>Book A <span> LUXURY ROOM</span></h1>
      <div className="booking__section-header">

        <div className='booking__section-images__columns'>
          <div className='images__column left'>
            <img src="./img/about-1.jpg" alt="" width="250px" height="210px"></img>
            <img src="./img/about-2.jpg" alt="" width="270px" height="240px"></img>
          </div>
          <div className='images__column right'>
            <img src="./img/about-3.jpg" alt="" width="220px" height="200px"></img>
            <img src="./img/about-4.jpg" alt="" width="250px" height="220px"></img>
          </div>

        </div>
        <form className='form-css'>    
          <input type="text" name="field2" className="field-long" placeholder='Your Name' />
          <input type="email" name="field3" className="field-long" placeholder='Your Email' />
          <input type="text" name="field3" className="fullwidth" placeholder='Your Phone' />
          <input type="date" name="field3" className="field-long" placeholder='Check In' onChange={e => console.log(e.target.value)}/>
          <input type="date" name="field3" className="field-long" placeholder='Check Out' />

          <select name="field4" className="halfwidth" placeholder='Adult 1'>
            <option value="Advertise" placeholder='Select Adult'>Adult 1</option>
            <option value="Partnership">Adult 2</option>
            <option value="General Question">Adult 3</option>
          </select>

          <select name="field4" className="halfwidth" placeholder='Adult 1'>
            <option value="Advertise">Child 1</option>
            <option value="Partnership">Child 2</option>
            <option value="General Question">Child 3</option>
          </select>
          <button className='booking_button'>Book Now</button> 

        </form>
      </div>

  const [customer] = useState(JSON.parse(localStorage.getItem("user")));
  const [confirm, setConfirm] = useState(false);
  const [classes, setClasses] = useState([]);
  const [rooms, setRooms] = useState([]);
  const navigate = Navigate("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [total, setTotal] = useState(0);
  const [room, setRoom] = useState({});
  const [value, setValue] = useState("");


  const load = () => {
    axios.get("http://localhost:1337/api/classes?populate=*").then((res) => {
      setClasses(res.data.data);
      setValue(res.data.data[0].attributes.title);
    });
  };

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (classes && classes[0]) {
      axios
        .get(
          CLASS.replace(
            ":id",
            classes.filter((item) => item.attributes.title === value)[0] &&
              classes.filter((item) => item.attributes.title === value)[0].id
          )
        )
        .then((res) => {
          setRooms(res.data.data.attributes.rooms.data);
          setRoom([res.data.data.attributes.rooms.data[0]]);
        });
    }
  }, [value]);

  const createOrder = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:1337/api/order-rooms", {
        data: {
          name,
          phone,
          from,
          to,
          rooms: room,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setConfirm(true);
      })
      .catch((err) => console.error(err));
  };

  const getPrice = () => {
    if (confirm) {
      const days =
        Number(String(to).split("-")[2]) -
        Number(String(from).split("-").join("")[2]);
      console.log(days);
    }
  };
  return (
    <Layout>
      <div className="booking__section">
        <h4>_____ROOM BOOKING_____</h4>
        <h1>
          Book A <span> LUXURY ROOM</span>
        </h1>
        <div className="booking__section-header">
          <div className="booking__section-images__columns">
            <div className="images__column-left">
              <img
                src="./img/about-1.jpg"
                alt=""
                width="250px"
                height="190px"
              ></img>
              <img
                src="./img/about-2.jpg"
                alt=""
                width="270px"
                height="240px"
              ></img>
            </div>
            <div className="images__column right">
              <img
                src="./img/about-3.jpg"
                alt=""
                width="190px"
                height="160px"
              ></img>
              <img
                src="./img/about-4.jpg"
                alt=""
                width="260px"
                height="180px"
              ></img>
            </div>
          </div>
          <form className="form-css" onSubmit={(e) => createOrder(e)}>
            <input
              type="text"
              name="field2"
              className="field-long"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              name="field3"
              className="field-long"
              placeholder="Your Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <input
              type="date"
              name="field3"
              className="field-long"
              placeholder="Check In"
              onChange={(e) => setFrom(e.target.value)}
              value={from}
            />
            <input
              type="date"
              name="field3"
              className="field-long"
              placeholder="Check Out"
              onChange={(e) => setTo(e.target.value)}
              value={to}
            />

            <select
              name="field4"
              className="halfwidth"
              placeholder="Adult 1"
              onChange={(e) => setValue(e.target.value)}
            >
              {classes &&
                classes.map((item) => (
                  <option
                    key={item.id}
                    value={item.attributes.title}
                    placeholder="Select Adult"
                  >
                    {item.attributes.title}
                  </option>
                ))}
            </select>

            <select
              name="field4"
              className="halfwidth"
              placeholder="Adult 1"
              onChange={(e) =>
                setRoom(
                  rooms.filter(
                    (item) => item.attributes.title === e.target.value
                  )
                )
              }
            >
              {rooms &&
                rooms.map((item) => (
                  <option
                    key={item.id}
                    value={item.attributes.title}
                    placeholder="Select Adult"
                    onClick={() => console.log(item)}
                  >
                    {item.attributes.title}
                  </option>
                ))}
            </select>
            <button className="booking_button">Book Now</button>
          </form>
        </div>

        {confirm ? (
          <div className="book_container">
            <div>
              <div className="popup" id="popup">
                <h2>Do you really want to order it?</h2>
                <div className="room_about">
                  <h3>Class: {value}</h3>
                  <h3>Room: {room[0].attributes.title}</h3>
                  <h3>
                    Date: {from} - {to}
                  </h3>
                  <h3>Total: {getPrice()}</h3>
                </div>
                <Link to="/my-orders">
                  <button className="yes">Yes</button>
                </Link>
                <button className="no" onClick={() => setConfirm(false)}>
                  No
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
}
export default Booking;
