import React, { useState } from "react";
import "./booking.css";
// import { initializeApp } from 'firebase/app';
// import { getDatabase,ref, set } from 'firebase/database';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function Booking() {
  // const app = initializeApp(firebaseConfig);
  // const databse = getDatabase()

  // const Home = () => {
  //   const [valid, setValid] = useState(true)
  //   const [hide, sethide] = useState(true)

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const book_date = document.getElementById('book_date')
  //     const book_time = document.getElementById('book_time')

  //     const Leave_date = document.getElementById('leave_date')
  //     const Leave_time = document.getElementById('leave_time')

  //     if(!book_date.value || !book_time.value || !Leave_date.value || !Leave_time){
  //       alert('Please fill all the ')
  //     }
  //   }
  // }
  return (
    <>
      <Navbar />
      <div className="booking__section">
        <h4>_____ROOM BOOKING_____</h4>
        <h1>
          Book <span> YOUR ROOM</span>
        </h1>
        <div className="booking__section-header">
          <div className="booking__section-images__columns">
            <div className="images__column left">
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
          <form className="form-css">
            <input
              type="text"
              name="field2"
              class="field-long"
              placeholder="Your Name"
            />
            <input
              type="email"
              name="field3"
              class="field-long"
              placeholder="Your Email"
            />
            <input
              type="email"
              name="field3"
              class="field-long"
              placeholder="Check In"
            />
            <input
              type="email"
              name="field3"
              class="field-long"
              placeholder="Check Out"
            />

            <select name="field4" className="halfwidth" placeholder="Adult 1">
              <option value="Advertise" placeholder="Select Adult">
                Adult 1
              </option>
              <option value="Partnership">Adult 2</option>
              <option value="General Question">Adult 3</option>
            </select>

            <select name="field4" className="halfwidth" placeholder="Adult 1">
              <option value="Advertise">Child 1</option>
              <option value="Partnership">Child 2</option>
              <option value="General Question">Child 3</option>
            </select>

            <select name="field4" className="fullwidth" placeholder="Room 1">
              <option value="Advertise">Room 1</option>
              <option value="Partnership">Room 2</option>
              <option value="General Question">Room 3</option>
            </select>

            <textarea
              name="field5"
              id="field5"
              class="fullwidth"
              placeholder="Special Request"
            ></textarea>
            <Link to='/'>
            <button className="booking_button">Book Now</button>
            </Link>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Booking;
