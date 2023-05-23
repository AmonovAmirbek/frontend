import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import "./roomDetail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import StarRating from "../../components/StarRating/StarRating";
import axios from "axios";
import { ROOM, REVIEWS } from "../../utils/urls";


export default function RoomDetail() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate('')

  useEffect(() => {
    axios.get(ROOM.replace(":id", params.id)).then((res) => {
      setData(res.data.data);
      setLoad(true);
    });
  }, []);

  console.log(data);

  const [body, setBody] = useState("");
  const [reviews, setReviews] = useState([]);

  const redirect = () => {
    localStorage.setItem("room", JSON.stringify(data))
    navigate('/booking')
  }
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
      .get(REVIEWS.replace("roomId", params.id))
      .then((res) => setReviews(res.data.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const addReview = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:1337/api/reviews", {
        data: {
          body,
          customer: user,
          rating: ratingList[rating],
          room: data.id
        },
      })
      .then((res) => {
        setBody("");
        setRating(null);
        loadReviews();
      })
      .catch((err) => console.error(err));
  };
  console.log(rating);
  return (
    <section>
      <Layout>
        <br />
        <div className="section__55">
          {load ? (
            <div className="columns__55">
              <div className="room_img">
                <img
                  src={`http://localhost:1337${data.attributes.image.data[0].attributes.url}`}
                  alt=""
                />
              </div>
              <div className="column__45">
                <h1>{data.attributes.title}</h1>
                <p>
                  {data.attributes.about}
                </p>
                <h1 className="text__76">{data.attributes.price} $</h1>
                <StarRating
                  object={ratingList}
                  rating={rating}
                  setRating={setRating}
                />
                <div className="detail_input">
                  <form onSubmit={(e) => addReview(e)}>
                    <input
                      type="text"
                      placeholder="Enter your comment"
                      onChange={(e) => setBody(e.target.value)}
                      value={body}
                    />
                    <button className="detail_button" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
                 <button className="button__77" onClick={() => redirect()}>BOOKING</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="detail_card">
          <h1>Reviews of other clients</h1>
          {reviews &&
            reviews.map((review) => (
              <div className="comment" key={review.id}>
                <div className="media_content">
                  <h2 className="title">
                    {review.attributes.customer.data.attributes.username}
                  </h2>
                  <h4 className="subtitle">{review.attributes.rating}</h4>
                </div>
                <div className="content"><p>{review.attributes.body}</p></div>
              </div>
            ))}
        </div>
      </Layout>
    </section>
  );
}
