import React from 'react'
import "./room.css"
import { FaBed } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { FaBath } from 'react-icons/fa'
import { FaWifi } from 'react-icons/fa'


const Room = () => {
  return ( 
    <div className="card">
      <img src={`https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?cs=srgb&dl=pexels-jean-van-der-meulen-1454806.jpg&fm=jpg}`} alt="" />
      <div className="bac-img img-1">
                    <p className="img-content">100$/Night</p>
                </div>
      <div className="card__content"> 
        <div className="card__content-top">
          <h4><b>Junior Suite</b></h4>
          <div className="card__content-top__stars">
            <AiFillStar fill={'gold'} size={30}/>
            <AiFillStar fill={'gold'} size={30}/>
            <AiFillStar fill={'gold'} size={30}/>
            <AiFillStar fill={'gold'} size={30}/>
            <AiFillStar fill={'gold'} size={30}/>
          </div>
        </div>

        <br />
        <FaBed fill={'gold'}/>  3 bed  |   <FaBath fill={'gold'}/>  2 Bath  | <FaWifi fill={'gold'}/>  Wifi 
        <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
        <br />


        <div className="card__content-buttons">
          <button className='btn first'>Wiev Detail</button>
          <button className='btn second'>Book Now</button>
        </div>
      </div>
    </div>
  )
}



export default Room