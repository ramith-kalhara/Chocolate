import React, { useState } from "react";
import "./css/AddChocolate.scss";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminFooter from "./AdminFooter";

const AddChocolate = () => {
  const [chocoimg, setChocoImg] = useState("");
  const [chocoName, setChocoName] = useState("");
  const [price, setPrice] = useState("");

  function sendData(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("chocoName", chocoName);
    formData.append("price", price);
    formData.append("chocoimg", chocoimg);

    axios
      .post("http://localhost:8080/Chocolate/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("Chocolate Added");
        console.log("Chocolate add");
      })
      .catch((err) => {
        console.error("Error adding Chococlate:", err);
        alert("Error adding user. Check the console for details.");
      });
  }
  return (
    <div>
      <AdminHeader />
      <form class="login">
        <h1 class="chocotitle"> Add Chocolate</h1>
        <input type="file" onChange={(e) => setChocoImg(e.target.files[0])} />
        <input
          type="text"
          onChange={(e) => {
            setChocoName(e.target.value);
          }}
          placeholder="Chocolate Name"
        />
        <input
          type="text"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="Price"
        />

        <button onClick={sendData}>Add</button>
        <Link to="/DeleteChocolate">
          <button
            style={{
              backgroundColor: "rgb(244, 175, 91)",
              color: "white",
              padding: "10px",
              margin: "5px",
              width: "80px",
              height: "43px",
              borderRadius: "5px",
            }}
          >
            View{" "}
          </button>
        </Link>
      </form>
     
    </div>
  );
};

export default AddChocolate;
