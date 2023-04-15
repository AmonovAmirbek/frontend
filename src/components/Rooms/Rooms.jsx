import React from 'react';
import Room from "../Room/Room";
import './rooms.css'

function Rooms(props) {
    return (
        <div className='rooms__section'>
            <div className="rooms__section-header">
                <h4>___OUR ROOMS___</h4 >
                <h1>Explore Our <span>ROOMS</span></h1>
            </div>
            <div className="rooms__section-content">
                <Room />
                <Room />
                <Room />
            </div>

            <div className="rooms__footer">
                <div className="rooms__footer-content">
                    <h3 >___LUXURY LIVING</h3>
                    <h1>Discover A Brand <br /> Luxurious Hotel</h1>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                        Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                    </p>
                    <button className='rooms__footer-content__btn first'>OUR ROOMS</button>
                    <button className='rooms__footer-content__btn'>BACK A ROOM</button>
                </div>
                <div className='rooms__footer-img'>
                    <img src="https://fullmedia.ru/uploaded/b7afbaec/edc2ac85/2fce8b31/351da60c.jpg" alt="" />
                </div>
            </div>
        </div >
    );
}


export default Rooms;