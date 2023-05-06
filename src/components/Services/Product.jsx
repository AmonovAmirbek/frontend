import React from "react";

export default function Product(props) {
  return (
    <div className="slider_card">
      <p>{props.description}</p>
      <div className="card_content">
        <img className="product--image" src={props.url} alt="product image" />
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}
