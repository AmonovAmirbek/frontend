import React from 'react'
import "./staffc.css"
import {  AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai'
export default function Staffc() {
  return (
  
    <section>
      <div className='section '>
        <div className=''>
          <br />
          <p>OUR TEAM</p>
          <h1>Explore Our STAFFS</h1>
        </div>
        <br />
        <div className='columns'>
          <div className='column '>
            <div className='card'>
              <div className='card-image'>
                <img src="https://fikiwiki.com/uploads/posts/2022-02/1644885630_59-fikiwiki-com-p-kartinki-uspeshnikh-muzhchin-59.jpg" alt="" width={280} />
                
              </div>
              <div className='card-content'>
                <div className='media '>
                  <div className='media-content'>
                  <AiFillFacebook size={35} fill={'gold'}/>
                <AiFillInstagram size={35} fill={'gold'}/>
                <AiFillTwitterCircle size={35} fill={'gold'}/>
                    <h1>Full Name</h1>
                    <p>Destignation</p>
                    

                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className='column '>
            <div className='card'>
              <div className='card-image'>
                <img src="https://static4.vivoo.ru/datas/photos/1200x1200/15/f1/f72123ed37b903c85c0ee0ba8722.jpg" alt="" width={280} />
                
              </div>
              <div className='card-content'>
                <div className='media '>
                  <div className='media-content'>
                  <AiFillFacebook size={35} fill={'gold'}/>
                <AiFillInstagram size={35} fill={'gold'}/>
                <AiFillTwitterCircle size={35} fill={'gold'}/>
                    <h1>Full Name</h1>
                    <p>Destignation</p>
                   

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='column '>
            <div className='card'>
              <div className='card-image'>
                <img src="https://www.kleo.ru/img/articles/chto-znachit-esli-muzhchina-nikogda-ne-pishet-pervym-no-vsegda-otvechaet-na-vashi-soobshhenija1.jpg" alt="" width={290}  />

              </div>
              <div className='card-content'>
                <div className='media '>
                  <div className='media-content'>
                  <AiFillFacebook size={35} fill={'gold'}/>
                    <AiFillInstagram size={35} fill={'gold'}/>
                    <AiFillTwitterCircle size={35} fill={'gold'}/>
                    <h1>Full Name</h1>
                    <p>Destignation</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='column '>
            <div className='card'>
              <div className='card-image'>
                <img src="https://www.laserskinsurgery.com/wp-content/uploads/2020/10/male-plastic-surgery-new-york.jpg" alt="" width={290} />
                
              </div>
              <div className='card-content'>
                <div className='media '>
                  <div className='media-content'>
                  <AiFillFacebook size={35} fill={'gold'}/>
                <AiFillInstagram size={35} fill={'gold'}/>
                <AiFillTwitterCircle size={35} fill={'gold'}/>
                    <h1>Full Name</h1>
                    <p>Destignation</p>
                   

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br /><br /><br /><br />
    </section>
    
  )
}

