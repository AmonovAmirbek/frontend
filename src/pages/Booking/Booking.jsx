import React from 'react'
import "./booking.css"

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

    </div>




  )
}
export default Booking
