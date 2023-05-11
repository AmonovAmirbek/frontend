import React, { useState, useEffect } from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import { CATEGORY } from "../../utils/urls";
import axios from "axios";

export default function Menu() {
  return (
    <div className="menu" id="menu">
      <div className="section_1">
        <h1> MENU </h1>
        <p>
          Unique wood fired pizzas or be tempted by our pasta, antipasto,
          focaccias, salads and Bruschetta dishes. Relax <br /> in the friendly
          ambience as you enjoy the aromas of the wood ovens or sit al fresco
          and soak up the Mildura <br /> sunshine.
        </p>
        <div className="menu_wrapper">
          <Link to={`/foods/pitsa`}>
            <div className="menu_card">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80"
                alt=""
              />
              <div className="info">
                <h3>FOOD</h3>
              </div>
            </div>
          </Link>
          <Link to={`/foods/salads`}>
            <div className="menu_card">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2FsYWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="info">
                <h3>SALAD</h3>
              </div>
            </div>
          </Link>
          <Link to={`/foods/drinks`}>
            <div className="menu_card">
              <img
                src="https://images.unsplash.com/photo-1597403491447-3ab08f8e44dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRyaW5rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="info">
                <h3>DRINK</h3>
              </div>
            </div>
          </Link>
          <Link to={`/foods/desserts`}>
            <div className="menu_card">
              <img
                src="https://img.freepik.com/premium-photo/concept-of-tasty-dessert-with-tiramisu-cake-close-up_185193-79660.jpg?w=1060"
                alt=""
              />
              <div className="info">
                <h3>DISSERT</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
