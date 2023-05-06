import React from "react";
import "./food.css";
import Layout from "../../components/Layout/Layout";

export default function Foods({item}) {
  return (
    <Layout>
      <div className="column-1">
      {food &&
          food.map((item) => (
        <div className="food_card">
          <div className="card-image-1">
            <img
              src=""
              alt=""
              width={250}
            />
          </div>
          <div className="card-content-1">
            <div className="media-1">
              <div className="media-content-1">
                <h1></h1>
                <p>Tomato sauce, mozzarella & oregano</p>
                <p></p>
                
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
      </Layout>
  );
}
