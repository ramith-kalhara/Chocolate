import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

const Chocolate = () => {
  const { UserId } = useParams();
  console.log(UserId);

  const [chocolateData, setChocolateData] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Fetch all chocolates when the component mounts
    axios.get('http://localhost:8080/Chocolate/')
      .then(response => {
        setChocolateData(response.data);
      })
      .catch(error => {
        console.error('Error fetching chocolate data:', error);
      });


    // Fetch user details based on UserId
    axios.get(`http://localhost:8080/User/getid/${UserId}`)
      .then(response => {
        setUserData(response.data.user); 
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [UserId]);

  

const handleBuyNow = async (chocoId, chocoimg, chocoName, price) => {
  try {
    const formData = new FormData();
    formData.append("Userid", UserId);
    formData.append("chocoid", chocoId);
    formData.append("chocoimg", chocoimg);  
    formData.append("chocoName", chocoName);
    formData.append("price", price);
    formData.append("Username", userData.name); 
    formData.append("UserAddress", userData.address);  
    formData.append("tp_number", userData.tp_number);  
    const response = await axios.post('http://localhost:8080/Order/add', formData);

    console.log(response.data);
    alert('Order Added. Check Order');
  } catch (error) {
    console.error('Error creating order:', error);
  }
};


  return (
    <div>
      <Header/>
      <section class="chocolate_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h2>Our chocolate products</h2>
            <p>
            Share the love with our elegantly packaged chocolate gift sets, ideal for any occasion and guaranteed to leave a lasting impression.
            </p>
          </div>
        </div>
        <div class="container">
          <div class="chocolate_container">
            {chocolateData.map((chocolate) => (
              <div class="box" key={chocolate._id}>
                <div class="img-box">
                  <img src={`http://localhost:8080/images/${chocolate.chocoimg}`} alt="" />
                </div>
                <div class="detail-box">
                  <h6>
                    {chocolate.chocoName}
                    <span> chocolate</span>
                  </h6>
                  <h5>$ {chocolate.price}</h5>
                  <a href="#" onClick={() => handleBuyNow(chocolate._id, chocolate.chocoimg, chocolate.chocoName, chocolate.price)}>BUY NOW</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Chocolate;
