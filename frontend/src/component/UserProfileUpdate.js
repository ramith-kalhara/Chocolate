import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./css/UserPro.css";
import Header from "./Header";
import Footer from "./Footer";

const UserProfileUpdate = () => {
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
      // Create an object with only the fields you want to update
      const updatedUser = {
        name: user.name,
        email: user.email,
        address: user.address,
        nic: user.nic,
        tp_number: user.tp_number,
        password: user.password,
      };
  
      console.log("Updated User Object:", updatedUser);
  
      const response = await axios.put(`http://localhost:8080/User/update/${UserId}`, updatedUser);
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
                  A Lead UX &amp; UI designer based in Canada
                </h6>

                <div class="row about-list">
                  <div class="col-md-6">
                    <div class="media">
                      <label>Name</label>
                      <p>
                        <input type="text"    onChange={handleChange} />
                      </p>
                    </div>
                    <div class="media">
                      <label>Email</label>
                      <p>
                        <input type="text"  onChange={handleChange}  />
                      </p>
                    </div>
                    <div class="media">
                      <label>Address</label>
                      <p>
                        <input type="text"  onChange={handleChange}  />
                      </p>
                    </div>
                    <div class="media">
                      <label>NIC</label>
                      <p>
                        <input type="text"   onChange={handleChange}  />
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="media">
                      <label>Telephone Number</label>
                      <p>
                        <input type="text"  onChange={handleChange}  />
                      </p>
                    </div>
                    <div class="media">
                      <label>Password</label>
                      <p>
                        <input type="password"      onChange={handleChange}  />
                      </p>
                    </div>
                    <div class="media">
                    
                      <p>
                      <input
        type="submit"
        value="Save"
        onClick={handleSave}
        style={{
          backgroundColor: '#4CAF50',
          marginLeft:'4rem',
          color: 'white',      
          width : '5rem',
          fontSize:'20px',      
          padding: '6px 20px',      
          border: 'none',             
          borderRadius: '5px',       
          cursor: 'pointer',         
        }}
      />
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

export default UserProfileUpdate;
