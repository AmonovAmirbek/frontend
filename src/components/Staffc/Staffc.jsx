import React from "react";
import "./staffc.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
export default function Staffc() {
  return (
    <section id="team">
      <div className="section__2">
        <div className="content">
          <br />
          <h3>OUR TEAM</h3>
          <h1>Explore Our <span>STAFFS</span></h1>
        </div>
        <br />
        <div className="columns__2">
          <div className="column__2 ">
            <div className="card__2">
              <div className="card-image__2">
                <img
                  src="https://fikiwiki.com/uploads/posts/2022-02/1644885630_59-fikiwiki-com-p-kartinki-uspeshnikh-muzhchin-59.jpg"
                  alt=""
                  width={280}
                  height={260}
                />
              </div>
              <div className="card-content__2">
                <div className="media__2 ">
                  <div className="media-content__2">
                    <AiFillFacebook size={35} fill={"gold"} />
                    <AiFillInstagram size={35} fill={"gold"} />
                    <AiFillTwitterCircle size={35} fill={"gold"} />
                    <br />
                    <h1>John Dou</h1>
                    <br />
                    <p>Destignation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column__2 ">
            <div className="card__2">
              <div className="card-image__2">
                <img
                  src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  alt=""
                  width={280}
                  height={260}
                />
              </div>
              <div className="card-content__2">
                <div className="media__2 ">
                  <div className="media-content__2">
                    <AiFillFacebook size={35} fill={"gold"} />
                    <AiFillInstagram size={35} fill={"gold"} />
                    <AiFillTwitterCircle size={35} fill={"gold"} />
                    <br />
                    <h1>Mayk Jordan</h1>
                    <br />
                    <p>Destignation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column__2 ">
            <div className="card__2">
              <div className="card-image__2">
                <img
                  src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                  alt=""
                  width={280}
                  height={260}
                />
              </div>
              <div className="card-content__2">
                <div className="media__2 ">
                  <div className="media-content__2">
                    <AiFillFacebook size={35} fill={"gold"} />
                    <AiFillInstagram size={35} fill={"gold"} />
                    <AiFillTwitterCircle size={35} fill={"gold"} />
                    <br />
                    <h1>Pedra Furada</h1>
                    <br />
                    <p>Destignation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column__2 ">
            <div className="card__2">
              <div className="card-image__2">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                  width={280}
                  height={260}
                />
              </div>
              <div className="card-content__2">
                <div className="media__2 ">
                  <div className="media-content__2">
                    <AiFillFacebook size={35} fill={"gold"} />
                    <AiFillInstagram size={35} fill={"gold"} />
                    <AiFillTwitterCircle size={35} fill={"gold"} />
                    <br />
                    <h1>George Vancouver</h1>
                    <br />
                    <p>Destignation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <br />
      <br />
      <br />
    </section>
  );
}
