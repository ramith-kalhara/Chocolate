import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Header from "./Header";
import Footer from "./Footer";

const Order = () => {
  const {UserId} = useParams();
  console.log(UserId);
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    

      
    // Fetch user details based on UserId
    axios.get(`http://localhost:8080/Order/get/${UserId}`)
      .then(response => {
        setOrderData(response.data.order); 
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [UserId]);

  const deleteOrder = async (orderId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/Order/delete/${orderId}`);
      console.log(response.data.status); // Log success or error message
      // Update user data after deletion
      setOrderData(orderData.filter(order => order._id !== orderId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <Header/>
      <section class="chocolate_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h2>Ordered chocolate products</h2>
            <p>
              cheak Your Order
            </p>
          </div>
        </div>
        <div class="container">
          <div class="chocolate_container">
            {orderData.map((order) => (
              <div class="box" key={order._id}>
                <div class="img-box">
                  <img src={`http://localhost:8080/images/${order.chocoimg}`} alt="" />
                </div>
                <div class="detail-box">
                  <h6>
                    {order.chocoName}
                    <span> chocolate</span>
                  </h6>
                  <h5>$ {order.price}</h5>
                  <a href="#"onClick={() => { deleteOrder(order._id); }} >Delete</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
  
}

export default Order
