
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';

const DeleteChocolate = () => {
  const [chocolateData, setChocolateData] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:8080/Chocolate/')
      .then(response => {
        setChocolateData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const DeleteChocolate = async (chocoid) => {
    try {
      const response = await axios.delete(`http://localhost:8080/Chocolate/chocoDelete/${chocoid}`);
      console.log(response.data.status);
      
      // Filter out the deleted chocolate from the state
      setChocolateData(chocolateData.filter(chocolate => chocolate._id !== chocoid));
    } catch (error) {
      console.error('Error deleting chocolate:', error);
      // Add logic to handle the error, e.g., show an error message to the user
    }
  };
  


  return (
    <div>
      <AdminHeader/>

   
      <section class="chocolate_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h2>Our chocolate products</h2>
            <p>
              You can delete Our Product
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
                  <span>  chocolate </span>
                </h6>
                <h5>$ {chocolate.price}</h5>
                <button onClick={() => DeleteChocolate(chocolate._id)}><a href="">Delete</a></button>
              </div>
            </div>
          ))}
            
           
            
           
            
          </div>
        </div>
      </section>
   <AdminFooter/>
    </div>
  );
}

export default DeleteChocolate
