import React from "react";
import { useParams } from 'react-router-dom';
import "./css/Footer.css";
import instaImg from "./images/insta-img.png";
import instaImg1 from "./images/insta-img1.png";



const Footer = () => {
  const {UserId} = useParams();
  console.log(UserId);
  
  return (
    <div>
      <section class="info_section layout_padding2">
        <div class="container">
          <div class="row info_main_row">
            <div class="col-md-6 col-lg-3">
              <div class="info_links">
                <h4>Menu</h4>
                <div class="info_links_menu">
                  <a href={`/home1/${UserId}`}>Home</a>
                  <a href={`/UserProfile/${UserId}`}>Profile</a>
                  <a href={`/chocolate/${UserId}`}>Chocolates</a>
                  <a href={`/order/${UserId}`}>Order</a>
                  
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="info_insta">
                <h4>Instagram</h4>
                <div class="insta_box">
                  <div class="img-box">
                    <img src={instaImg} alt="" />
                  </div>
                  <p>

                  Indulge in divine chocolate moments with us. </p>
                </div>
                <div class="insta_box">
                  <div class="img-box">
                    <img src={instaImg1} alt="" />
                  </div>
                  <p>
Experience bliss in every bite with us.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="info_detail">
                <h4>Company</h4>
                <p class="mb-0">
                  Indulge in the rich world of our exquisite chocolates. Crafted
                  with precision, our delectable treats promise a symphony of
                  flavors, satisfying every craving
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <h4>Contact Us</h4>
              <div class="info_contact">
                <a href="">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span>Location</span>
                </a>
                <a href="">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <span>Call +01 1234567890</span>
                </a>
                <a href="">
                  <i class="fa fa-envelope"></i>
                  <span>Chocolux@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
