import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter';

const AdminOrder = () => {
  const [orderData, setorderData] = useState([]);

  useEffect(() => {
    // Fetch all users when the component mounts
    axios.get('http://localhost:8080/Order/')
      .then(response => {
        setorderData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const deleteOrder = async (orderId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/Order/delete/${orderId}`);
      console.log(response.data.status); // Log success or error message
      // Update user data after deletion
      setorderData(orderData.filter(order => order._id !== orderId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  return (
    <div>
      <AdminHeader/>
      <div className="limiter">
        <div className="container-table100">
        <h1 className="headP">User Orders</h1>
          <div className="wrap-table100">
            <table border={0}>
              <div className="table">
                <div className="Adminrow header">
                  <div className="cell"> Name</div>
                  <div className="cell">Chocolate Name</div>
                  <div className="cell">Address</div>
                  <div className="cell">Telephone Number</div>
                  <div className="cell">Status</div>
                </div>

                {orderData.map((order) => (
                  <div className="Adminrow" key={order._id}>
                    <div className="cell" data-title="Email">{order.Username}</div>
                    <div className="cell" data-title="Name">{order.chocoName}</div>
                    <div className="cell" data-title="Address">{order.UserAddress}</div>
                    <div className="cell" data-title="Telephone">{order.tp_number}</div>
                    <div className="cell" data-title="Status">
                      <button className='button' onClick={() => deleteOrder(order._id)}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </table>
          </div>
        </div>
      </div>
      <AdminFooter/>
    </div>
  )
}

export default AdminOrder
