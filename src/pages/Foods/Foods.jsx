import React, { useState, useEffect } from "react";
import "./food.css";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CATEGORY, FOOD } from "../../utils/urls";

export default function Foods() {
  const [food, setFood] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(FOOD.replace('foodCategory', params.category))
      .then((res) => setFood(res.data.data));
  }, []);
  console.log(food);
  return (
    <Layout>
      <div className="columns_1">
        {food &&
          food.map((item) => (
            <div className="column-1" key={item.id}>
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
                      <p>{item.attributes.about}</p>
                      <h3>{item.attributes.price} $</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
}
