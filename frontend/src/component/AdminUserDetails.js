import React, { useEffect, useState } from 'react';
import './css/AdminHome.css';
import AdminHeader from './AdminHeader';
import axios from 'axios';
import AdminFooter from './AdminFooter';

const AdminUserDetails = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch all users when the component mounts
    axios.get('http://localhost:8080/User/')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/User/delete/${userId}`);
      console.log(response.data.status); // Log success or error message
      // Update user data after deletion
      setUserData(userData.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className="limiter">
       
        <div className="container-table100">
        <h1 className="headP">User Profile</h1>
          <div className="wrap-table100">
            <table border={0}>
              <div className="table">
                <div className="Adminrow header">
                  <div className="cell"> Email</div>
                  <div className="cell">Name</div>
                  <div className="cell">Address</div>
                  <div className="cell">Telephone Number</div>
                  <div className="cell">Status</div>
                </div>

                {userData.map((user) => (
                  <div className="Adminrow" key={user._id}>
                    <div className="cell" data-title="Email">{user.email}</div>
                    <div className="cell" data-title="Name">{user.name}</div>
                    <div className="cell" data-title="Address">{user.address}</div>
                    <div className="cell" data-title="Telephone">{user.tp_number}</div>
                    <div className="cell" data-title="Status">
                      <button className='button' onClick={() => deleteUser(user._id)}>Delete</button>
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
  );
};

export default AdminUserDetails;
