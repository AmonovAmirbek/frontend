import React, {useState, useEffect} from "react";
import "./food.css";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function Foods() {
  const params = useParams();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/foods/:id?populate=image&populate=category")
      .then(res => console.log(res.data.data));
  }, []);
  console.log(foods);
  return (
    <Layout>
      
      <div className="column-1">
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
      </div>
      </Layout>
  );
}
