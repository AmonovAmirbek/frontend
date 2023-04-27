import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import "./roomDetail.css";
import { Link, useParams } from "react-router-dom";
import StarRating from "../../components/StarRating/StarRating";
import axios from "axios";
import { ROOM, REVIEWS } from "../../utils/urls";

export default function RoomDetail() {
  const params = useParams();

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false)

  useEffect(() => {
    axios
      .get(ROOM.replace(":id", params.id))
      .then((res) => {
        setData(res.data.data)
        setLoad(true)
      });
  }, []);

  console.log(data);

  const [body, setBody] = useState("");
  const [reviews, setReviews] = useState([]);
  //---
  const ratingList = {
    1: "bad",
    2: "ok",
    3: "good",
    4: "excellent",
  };
  const [rating, setRating] = useState(null);
  const [user] = useState(JSON.parse(localStorage.getItem("user")) || []);

  const loadReviews = () => {
    axios
      .get(REVIEWS.replace("productId", params.id))
      .then((res) => setReviews(res.data.data))
      .catch((err) => console.error(err));
  };

  const addReview = async (event) => {
    event.preventDefault();
    await axios
      .post(REVIEWS, {
        data: {
          body,
          user,
          point: ratingList[rating],
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setBody("");
        setRating(null);
        loadReviews();
      })
      .catch((err) => console.error(err));
  };
    return (
      <section>
        <Layout>
          <br />
          <div className="section__55">
            {load ? (<div className="columns__55">
              <div className="room_img">
                 <img
                  src={`http://localhost:1337${data.attributes.image.data[0].attributes.url}`}
                  alt=""
                />
              </div>
              <div className="column__45">
                <h1>{data.attributes.title}</h1>
                <p>
                  Lorem ipsum dolor, sit amet <br /> consectetur adipisicing
                  elit. Libero <br /> eos minima voluptates hic quas <br />{" "}
                  dolores? Et nam laboriosam ab consequatur <br /> delectus,
                  libero veritatis nostrum <br /> explicabo amet fuga vel nemo
                  illo. Nostrum <br />
                  molestias inventore culpa mollitia.
                </p>
                <h1 className="text__76"></h1>
                <StarRating
                  object={ratingList}
                  rating={rating}
                  setRating={setRating}
                />

                <Link to="/booking">
                  <button className="button__77">BOOKING</button>
                </Link>
              </div>
            </div>): ""}
          </div>
        </Layout>
      </section>
    );
  }
