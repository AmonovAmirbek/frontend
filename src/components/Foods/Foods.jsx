import React from "react";
import "./food.css";

export default function Foods({ item }) {
  return (

      <div className="column-1">
        <div className="food_card">
          <div className="card-image-1">
            <img
              src={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`}
              alt=""
              width={250}
            />
          </div>
          <div className="card-content-1">
            <div className="media-1">
              <div className="media-content-1">
                <h1>{item.attributes.name}</h1>
                <p>Tomato sauce, mozzarella & oregano</p>
                <p>{item.attributes.price} $</p>
                <button className="button-1">To Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
