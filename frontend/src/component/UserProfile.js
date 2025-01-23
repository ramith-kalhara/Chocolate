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
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 className="dark-color">About Me</h3>
                <h6 className="theme-color lead">
                  Welcome  {user.name}
                </h6>

                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>Name</label>
                      <p>
                      {user.name}
                      </p>
                    </div>
                    <div className="media">
                      <label>Email</label>
                      <p>
                      {user.email}
                      </p>
                    </div>
                    <div className="media">
                      <label>Address</label>
                      <p>
                      {user.address}
                      </p>
                    </div>
                    <div className="media">
                      <label>NIC</label>
                      <p>
                      {user.nic}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <label>Telephone Number</label>
                      <p>
                      {user.tp_number}
                      </p>
                    </div>
                    <div className="media">
                      <label>Password</label>
                      <p>
                        <p>{user.password}</p>
                      </p>
                    </div>
                    <div className="media">
                    
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
            <div className="col-lg-6">
              <div className="about-avatar">
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
          <div className="counter">
            <div className="row">
              <h6 className="count h2" data-to="190" data-speed="190">
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
