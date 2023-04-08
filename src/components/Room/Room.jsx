import React from 'react'
import "./room.css"
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar ";
import { FaBath } from "@react-icons/all-files/fa/FaBath ";
import {FaBed} from "@react-icons/all-files/ai/FaBed ";

import { FaWifi } from 'react-icons/fa/FaWifi';


const Room = () => {
  return (
    <div className="columns">
    <div className="column is-4">
      <div className="card">
        <img src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1454806.jpg&fm=jpg" alt="" />

        <div class="card-content">
          <h4><b>Junior Suite</b></h4>
          <AiFillStar/>


          <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
          <FaBed/> <FaBath/><FaWifi/>
          <div className="buttons">
          <button className='btn'>Wiev Detail</button>
          <button className='btn'>Book Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Room