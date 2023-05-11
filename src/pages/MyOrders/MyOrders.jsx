import React, { useEffect, useState } from "react";
import "./myOrders.css";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { RiShoppingBasket2Line } from 'react-icons/ri'


export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    axios
      .get(
        `http://localhost:1337/api/orders/?populate=order_room.rooms.class&&filters[customer][username]=${user.username}`
      )
      .then((res) => {
        setOrders(res.data.data);
      });
  }, []);
  console.log(orders);
  return (
    <Layout>
      <div className="my_orders">
        {!orders.length ? (
          <div className="no_order">
            <h1>No orders</h1>
            <RiShoppingBasket2Line size={30}/>
          </div>
        ) : (
          <table>
            <tr>
              <th>User</th>
              <th>Class</th>
              <th>Room</th>
              <th>Total</th>
            </tr>
            {orders.length &&
              orders.map((order) => (
                <tr>
                  <td>{order.attributes.order_room.data.attributes.name}</td>
                  <td>
                    {
                      order.attributes.order_room.data.attributes.rooms.data[0]
                        .attributes.class.data.attributes.title
                    }
                  </td>
                  <td>
                    {
                      order.attributes.order_room.data.attributes.rooms.data[0]
                        .attributes.title
                    }
                  </td>
                  <td>$ {order.attributes.total}</td>
                </tr>
              ))}
          </table>
        )}
      </div>
    </Layout>
  );
}
