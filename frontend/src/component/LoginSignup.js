import React, { useState, useRef } from "react";
import axios from "axios";
import "./css/LoginSignup.css";



const LoginSignup = () => {
  const [fileImage, setImage] = useState("");
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const telephoneInputRef = useRef(null);
  const addressInputRef = useRef(null);
  const nicInputRef = useRef(null);
  const passwordinputRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/User/login', {
        email,
        password,
      });

      const { status, user } = response.data;

      if (status === 'exist') {
        // Handle the user data, you can redirect or do other actions
        console.log("User:", user);
        window.location.href = `/home1/${user._id}`;
      } else if (status === 'not exist') {
       
      }
    } catch (error) {
      console.error(error);
      checkAdminLogin();
      
    }
  }

  async function checkAdminLogin() {
    try {
      const response = await axios.post('http://localhost:8080/Admin/loginAdmin', {
        email,
        password,
      });
  
      const { status, admin } = response.data;
  
      if (status === 'exist') {
        console.log("admin:", admin);
        window.location.href = '/AdminUserDetails';
      } else if (status === 'not exist') {
        alert('Admin is not signed up');
      }
    } catch (error) {
      console.error(error);
      alert('Error during  login');
    }
  }

  function sendData(e) {
    e.preventDefault();

    // Accessing values using refs
    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const telephone = telephoneInputRef.current.value;
    const address = addressInputRef.current.value;
    const nic = nicInputRef.current.value;
    const password = passwordinputRef.current.value;

    if (
      !name ||
      !email ||
      !telephone ||
      !address ||
      !nic ||
      !fileImage ||
      !password
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("image", fileImage);
    formData.append("email", email);
    formData.append("name", name);
    formData.append("tp_number", telephone);
    formData.append("address", address);
    formData.append("nic", nic);
    formData.append("password", password);

    axios
      .post("http://localhost:8080/User/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        alert("User Added");
        console.log("user add");
      })
      .catch((err) => {
        console.error("Error adding user:", err);
        alert("Error adding user. Check the console for details.");
      });
  }
  return (
    <div class="loginSignupbg">
      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label for="tab-1" class="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" />
          <label for="tab-2" class="tab">
            Sign Up
          </label>
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">
                  Username
                </label>
                <input id="user" type="text" onChange = {(e)=>{setEmail(e.target.value)}} class="input" />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password" onChange = {(e)=>{setPassword(e.target.value)}}
                />
              </div>
              <div class="group">
                <input id="check" type="checkbox" class="check" checked />
                <label for="check">
                  <span class="icon"></span> Keep me Signed in
                </label>
              </div>
              <div class="group">
                <input type="submit" class="button" onClick={submit} value="Sign In" />
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>

            <div class="sign-up-htm">
              {/* Your existing sign-up form JSX */}
              {/* Attach refs to input fields */}
              <div class="group">
                <label for="user" class="label">
                  Profile Photo
                </label>
                <input
                  id="user"
                  type="file"
                  class="input"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Email Address
                </label>
                <input
                  id="pass"
                  type="text"
                  ref={emailInputRef}
                  class="input"
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Name
                </label>
                <input id="pass" type="text" ref={nameInputRef} class="input" />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Address
                </label>
                <input
                  id="pass"
                  type="text"
                  ref={addressInputRef}
                  class="input"
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Nic
                </label>
                <input id="pass" type="text" ref={nicInputRef} class="input" />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Telephone Number
                </label>
                <input
                  id="pass"
                  type="text"
                  ref={telephoneInputRef}
                  class="input"
                />
              </div>
              <div class="group">
                <label for="pass" class="label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  class="input"
                  data-type="password"
                  ref={passwordinputRef}
                />
              </div>
              <div class="group">
                <input
                  type="submit"
                  class="button"
                  value="Sign Up"
                  onClick={sendData}
                />
              </div>
              <div class="hr"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
