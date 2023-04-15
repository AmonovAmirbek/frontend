import React from 'react'
import "./about.css"
import { FaHotel } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { AiOutlineTeam } from 'react-icons/ai'


function About(props) {
    return (
        <section className='about__section'>
            <div className='about__section-container'>
                <div className="about__section-content">
                    <h6>About Us ____</h6>
                    <h1>"Welcome to"<span>Hotelier</span></h1>
                    <p>
                        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Alique diam amet diam et eos.
                        Clita erat ipsum et lorem et sit, sed stet
                        lorem sit clita duo justo magna dolore erat amet"
                    </p>
                    <div className='about__cards'>
                        <div className='about__cards-card'>
                            <  FaHotel fill='#FEA116' size={50}/>
                            <h1>1234</h1>
                            <p>Staffs</p>                 
                        </div>
                        <div className='about__cards-card'>
                            <AiFillSetting fill='#FEA116' size={50}/>
                            <h1>1234</h1>
                            <p>Staffs</p>
                        </div>
                        <div className='about__cards-card'>
                            <AiOutlineTeam fill='#FEA116' size={50}/>
                            <h1>1234</h1>
                            <p>Staffs</p>
                        </div>
                    </div>
                    <button>EXPLORE MORE</button>
                </div>
                <div className='images__columns'>
                    <div className='images__column left'>
                        <img src="./img/about-1.jpg" alt="" width="200px" height="170px"></img>
                        <img src="./img/about-2.jpg" alt="" width="220px" height="200px"></img>
                    </div>
                    <div className='images__column right'>
                        <img src="./img/about-3.jpg" alt="" width="160px" height="130px"></img>
                        <img src="./img/about-4.jpg" alt="" width="220px" height="160px"></img>
                    </div>
                </div>
            </div>

            


        </section >

    
    )
}
export default About


