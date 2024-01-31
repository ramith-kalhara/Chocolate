import React from "react";
import { useParams } from 'react-router-dom';

import './css/Header.css'

const AdminHeader = () => {

  

  return (
    <div>
      
        <div class="container-fluid header_section">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              ChocoLux
            </a>
          
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/AdminUserDetails">Users <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/AdminOrder"> Orders</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/AddChocolate">Chocolates</a>
                </li>
               
                <li class="nav-item">
                  <a class="nav-link" href="/">Log Out</a>
                </li>
              </ul>
              <div class="quote_btn-container">
                <form class="form-inline">
                  <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
                <a href="">
                  <i class="fa fa-user" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
    </div>
  );
};

export default AdminHeader;
