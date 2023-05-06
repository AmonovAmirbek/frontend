import React, { useState, useEffect } from "react";
import "./pools.css";
import Pool from "../Pool/Pool";
import axios from "axios";
import Layout from "../../components/Layout/Layout";

export default function Pools() {
  const [pools, setPools] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/pools?populate=image&populate=order_pool")
      .then((res) => setPools(res.data.data));
  }, []);
  console.log(pools);
  return (
    <Layout>
      <div className="pool__section-header">
        <h1>
          Explore Our <span>POOLS</span>
        </h1>

        {pools && pools.map((item) => <Pool item={item} key={item.id}/>)}
      </div>
    </Layout>
  );
}
