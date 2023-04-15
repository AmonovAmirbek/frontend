import React from 'react';
import "./header.css"


export default Header;

function Header(props) {
    return (
        <div className='header'>
            <p>LUXURY LIVING</p>
            <h1>Discover A Brand</h1>
            <h1>Luxurious Hotel</h1>
            <div className="buttons">
                <button className='button' >OUR ROOM</button>
                <button className='button'>OUR RESTORAN</button>
            </div>
        </div>


    );
}



