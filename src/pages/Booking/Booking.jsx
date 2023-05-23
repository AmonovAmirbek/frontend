import React, { useState, useEffect } from "react";
import "./booking.css";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { CLASS } from "../../utils/urls";
import { useNavigate, useParams } from "react-router-dom";

function Booking() {
  const [customer] = useState(JSON.parse(localStorage.getItem("user")));
  const [confirm, setConfirm] = useState(false);
  const [classes, setClasses] = useState([]);
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [total, setTotal] = useState(0);
  const [room, setRoom] = useState({});
  const [value, setValue] = useState("");
  const [orderProduct, setOrderProduct] = useState(null);

  const load = () => {
    const locale = JSON.parse(localStorage.getItem('room'))

    axios.get("http://localhost:1337/api/classes?populate=*").then((res) => {
      setClasses(res.data.data);
      if (!locale) {
        setValue(res.data.data[0].attributes.title);
      } else {
        setValue(locale.attributes.class.data.attributes.title)
      }
    });
  };

  useEffect(() => {
    if (!customer) {
      navigate("/sign-in");
    } else {
      load();
    }
  }, []);

  useEffect(() => {
    const locale = JSON.parse(localStorage.getItem('room'))
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
          if (!locale) {
            setRoom(res.data.data.attributes.rooms.data[0]);
          } else {
            setRoom(locale)
            localStorage.removeItem('room')
          }
        });
    }
  }, [value]);

  const getPrice = () => {
    if (confirm) {
      const date1 = new Date(from);
      const date2 = new Date(to);

      const diffTime = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      return diffDays;
    }
  };

  const confirmOrder = () => {
    axios
      .post("http://localhost:1337/api/orders", {
        data: {
          order_room: orderProduct,
          total: getPrice() * Number(room.attributes.price),
          number: phone,
          customer: customer,
          from: from,
          to: to,
        },
      })
      .then((res) => {
        navigate("/my-orders");
      });
  };

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
        setOrderProduct(res.data.data);
      })
      .catch((err) => console.error(err));
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
              required
              className="field-long"
              placeholder="Your Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <input
              type="date"
              name="field3"
              required
              className="field-long"
              placeholder="Check In"
              onChange={(e) => setFrom(e.target.value)}
              value={from}
            />
            <input
              type="date"
              name="field3"
              required
              className="field-long"
              placeholder="Check Out"
              onChange={(e) => setTo(e.target.value)}
              value={to}
            />

            <select
              name="field4"
              className="halfwidth"
              placeholder="Adult 1"
              value={value}
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
              value={room && room.attributes ? room.attributes.title : ''}
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
                  <h3>Room: {room.attributes.title}</h3>
                  <h3>
                    Date: {from} - {to}
                  </h3>
                  <h3>
                    Total: ${getPrice() * Number(room.attributes.price)}
                  </h3>
                </div>
                <button className="yes" onClick={() => confirmOrder()}>
                  Yes
                </button>
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
