import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";
import "./css/UserPro.css";
import Header from "./Header";
import Footer from "./Footer";

const UserProfile = () => {
  const { UserId } = useParams();
  console.log(UserId);
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    nic: "",
    tp_number: "",
    password: "",
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/User/getid/${UserId}`);
        const userData = response.data.user;
        setUser(userData);
        console.log(userData);
      } catch (error) {
        console.error("Error fetching user details:", error.message);
      }
    };

    if (UserId) {
      getUser();
    }
  }, [UserId]);

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/User/update/${UserId}`, user);
      console.log(response.data.status);
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <Header />
      <section class="section about-section gray-bg" id="about">
        <div class="container">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-lg-6">
              <div class="about-text go-to">
                <h3 class="dark-color">About Me</h3>
                <h6 class="theme-color lead">
                  Welcome  {user.name}
                </h6>

                <div class="row about-list">
                  <div class="col-md-6">
                    <div class="media">
                      <label>Name</label>
                      <p>
                      {user.name}
                      </p>
                    </div>
                    <div class="media">
                      <label>Email</label>
                      <p>
                      {user.email}
                      </p>
                    </div>
                    <div class="media">
                      <label>Address</label>
                      <p>
                      {user.address}
                      </p>
                    </div>
                    <div class="media">
                      <label>NIC</label>
                      <p>
                      {user.nic}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="media">
                      <label>Telephone Number</label>
                      <p>
                      {user.tp_number}
                      </p>
                    </div>
                    <div class="media">
                      <label>Password</label>
                      <p>
                        <p>{user.password}</p>
                      </p>
                    </div>
                    <div class="media">
                    
                      <p>
                      <Link to={`/UserProfileUpdate/${UserId}`}>
  <input
    type="submit"
    value="Update"
    style={{
      backgroundColor: '#4CAF50',
      marginLeft: '2rem',
      color: 'white',
      width: '5rem',
      fontSize: '20px',
      padding: '6px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    }}
  />
</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about-avatar">
                <img
                  src = {`http://localhost:8080/images/${user.image}`}
                  style={{
                   
                        
                    width : '15rem',
                    heightL:'15rem'
                          
                  }}
                  title=""
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="counter">
            <div class="row">
              <h6 class="count h2" data-to="190" data-speed="190">
                Thank You visit Our Site
              </h6>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UserProfile;
