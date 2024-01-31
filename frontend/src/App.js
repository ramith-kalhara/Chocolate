import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

import Home from "./component/Home";
import Chocolate from "./component/Chocolate";
import LoginSignup from "./component/LoginSignup";
import UserProfile from "./component/UserProfile";
import AdminUserDetails from "./component/AdminUserDetails";
import AddChocolate from "./component/AddChocolate";
import DeleteChocolate from "./component/DeleteChocolate";
import Order from "./component/Order";
import AdminOrder from "./component/AdminOrder";
import UserProfileUpdate from "./component/UserProfileUpdate";
import AdminFooter from "./component/AdminFooter";




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/home1/:UserId" element={<Home />} />
          <Route path="/chocolate/:UserId" element={<Chocolate />} />
          <Route path="/profile/:UserId" element={<UserProfile />} />
          <Route path="/AdminUserDetails" element={<AdminUserDetails />} />
          <Route path="/AddChocolate" element={<AddChocolate />} />
          <Route path="/DeleteChocolate" element={<DeleteChocolate />} />
          <Route path="/order/:UserId" element={<Order />} />
          <Route path="/AdminOrder" element={<AdminOrder />} />
          <Route path="/UserProfileUpdate/:UserId" element={<UserProfileUpdate/>} />
          <Route path="/UserProfile/:UserId" element={<UserProfile/>} />
          <Route path="/AdminFooter" element={<AdminFooter/>} />
        
        
         

        </Routes>
      </div>
    </Router>
  );
}

export default App;
