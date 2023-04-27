import React, { useState, useEffect } from "react";
import "./menu.css";
import axios from "axios";
import Foods from "../Foods/Foods";

export default function Menu() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/foods?populate=image")
      .then((res) => setFoods(res.data.data));
  }, []);
  console.log(foods);
  return (
    <section className="menu_section" id="menu">
      <div className="section_1">
        <h1> MENU </h1>
        <p>
          Unique wood fired pizzas or be tempted by our pasta, antipasto,
          focaccias, salads and Bruschetta dishes. Relax <br /> in the friendly
          ambience as you enjoy the aromas of the wood ovens or sit al fresco
          and soak up the Mildura <br /> sunshine.
        </p>
        <div className="food">
          {foods && foods.map((item) => <Foods item={item} key={item.id}/>)}
        </div>
      </div>
    </section>
  );
}
