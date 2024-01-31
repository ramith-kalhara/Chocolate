import React, { useState, useEffect } from "react";
import "./css/Home.css";
import "./css/style.scss";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom"; // Adjust the path accordingly

import instaImg from "./images/insta-img.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import {
  sliderImg,
  whiteArrow,
  colorArrow,
  aboutImg,
  offerImg,
  clientChocolate,
  clientImg,
  sliderImg1,
  sliderImg2,
  clientImg2,
  clientImg1

  
} from "./images/index";

const Home = () => {
  const { UserId } = useParams();
  console.log(UserId);

  return (
    <div>
      {/*header component */}
      <div>
        <Header />
      </div>

      <div class="hero_area">
        <section class="slider_section ">
          <div id="customCarousel1" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="detail_box">
                        <h1>
                          Choco <br />
                          <span>Artistry</span>
                        </h1>
                        <a href="#">
                          <span>Read More</span>
                          <img src={whiteArrow} alt="" />
                        </a>
                      </div>
                    </div>
                    <div class="col-md-4 ml-auto">
                      <div class="img-box">
                        <img src={sliderImg1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="detail_box">
                        <h1>
                          Sweet
                          <br />
                          <span>Experiences</span>
                        </h1>
                        <a href="#">
                          <span>Read More</span>
                          <img src={whiteArrow} alt="" />
                        </a>
                      </div>
                    </div>
                    <div class="col-md-4 ml-auto">
                      <div class="img-box">
                        <img src={sliderImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="detail_box">
                        <h1>
                          Chocolate <br />
                          <span>Yummy</span>
                        </h1>
                        <a href="#">
                          <span>Read More</span>
                          <img src={whiteArrow} alt="" />
                        </a>
                      </div>
                    </div>
                    <div class="col-md-4 ml-auto">
                      <div class="img-box">
                        <img src={sliderImg2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel_btn-box">
            <a
              class="carousel-control-prev"
              href="#customCarousel1"
              role="button"
              data-slide="prev"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#customCarousel1"
              role="button"
              data-slide="next"
            >
              <FontAwesomeIcon icon={faArrowRight} />
              <span class="sr-only">Next</span>
            </a>
          </div>
        </section>
      </div>

      {/* =========== about =============*/}
      <section class="about_section layout_padding ">
        <div class="container  ">
          <div class="row">
            <div class="col-md-6">
              <div class="detail-box">
                <div class="heading_container">
                  <h2>About Our Company</h2>
                </div>
                <p>
                  Unveil the irresistible allure of our chocolate creations,
                  meticulously curated for the discerning palate. From velvety
                  truffles to rich pralines, each piece encapsulates our
                  dedication to unparalleled quality and flavor, promising
                  indulgence in every decadent bite.,{" "}
                </p>
                <a href="#">
                  <span>Read More</span>
                  <img src={colorArrow} alt="" />
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="img-box">
                <img src={aboutImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section class="offer_section layout_padding">
        <div class="container">
          <div class="box">
            <div class="detail-box">
              <h2>Offers on chocolates</h2>
              <h3>
                Get 5% Offer <br />
                any Chocolate items
              </h3>
              <a href={`/chocolate/${UserId}`}>Buy Now</a>
            </div>
            <div class="img-box">
              <img src={offerImg} alt="" />
            </div>
          </div>
          <div class="btn-box">
            <a href="">
              <span>See More</span>
              <img src={colorArrow} alt="" />
            </a>
          </div>
        </div>
      </section>

      {/* client Section */}
      <section class="client_section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4 ml-auto">
              <div class="img-box sub_img-box">
                <img src={clientChocolate} alt="" />
              </div>
            </div>
            <div class="col-lg-6 px-0">
              <div class="client_container">
                <div class="heading_container">
                  <h2>Testimonial</h2>
                </div>
                <div
                  id="customCarousel2"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="box">
                        <div class="img-box">
                          <img src={clientImg} alt="" />
                        </div>
                        <div class="detail-box">
                          <h4>Emily Thompson</h4>
                          <p>
                          Indulging in the chocolates from this company is an unparalleled experience of sheer delight. Each piece is a testament to the exquisite craftsmanship and dedication to quality, offering a symphony of flavors that linger on the palate. From velvety truffles to rich pralines, every bite is a moment of pure bliss. The attention to detail and the commitment to sourcing the finest ingredients shine through, elevating these chocolates to a level of sophistication that transcends ordinary treats. For those with discerning taste, this chocolate company is a true connoisseur's haven, delivering an extraordinary journey into the world of indulgence.Elevate your taste with us
                          </p>
                          <i class="fa fa-quote-left" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="box">
                        <div class="img-box">
                          <img src={clientImg2} alt="" />
                        </div>
                        <div class="detail-box">
                          <h4>James Mitchell</h4>
                          <p>
                          Savoring the chocolates from this company is a heavenly experience. The richness and variety of flavors are unmatched, delivering pure joy in every bite. The attention to detail and quality craftsmanship make these chocolates stand out. From silky truffles to decadent pralines, each piece is a testament to the brand's commitment to excellence. Indulging in these treats is not just a moment; it's an exquisite escape into a world of unparalleled taste. If you seek perfection in every bite, this chocolate company is a true connoisseur's delight – a symphony of flavors that lingers, leaving a sweet, unforgettable impression.
                          </p>
                          <i class="fa fa-quote-left" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="box">
                        <div class="img-box">
                          <img src={clientImg1} alt="" />
                        </div>
                        <div class="detail-box">
                          <h4>Gero Miliya</h4>
                          <p>
                          Indulging in the chocolates from this company is an absolute pleasure. The diverse range of flavors, combined with the smooth textures, creates a delightful experience with every bite. The attention to detail and commitment to quality are evident, making each piece a work of art. From rich truffles to decadent pralines, the craftsmanship is unparalleled. These chocolates are not just treats; they are a celebration of taste and luxury. For anyone seeking an exquisite journey into the world of fine chocolates, this company is a top choice. Highly recommended for those who appreciate the perfect balance of flavor and indulgence
                          </p>
                          <i class="fa fa-quote-left" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel_btn-box">
                    <a
                      class="carousel-control-prev"
                      href="#customCarousel2"
                      role="button"
                      data-slide="prev"
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                      <span class="sr-only">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next"
                      href="#customCarousel2"
                      role="button"
                      data-slide="next"
                    >
                      <FontAwesomeIcon icon={faArrowLeft} />
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section*/}

      <Footer />
    </div>
  );
};

export default Home;
