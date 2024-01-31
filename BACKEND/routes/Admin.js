const router = require("express").Router();

let Admin = require('../models/Admin');
const multer = require('multer');
const bodyParser = require('body-parser');
const path=require('path');

//create  Admin 
router.route("/addAdmin").post( (req, res) => {


  
  const {  email, password} = req.body;

  if (  !email  || !password) {
    return res.status(400).json({ error: 'Invalid or missing fields.' });
  }

  const newAdmin = new Admin({ email, password});

  newAdmin.save()
    .then(() => {
      res.status(201).json({ message: 'Admin added successfully.' });
    })
    .catch((err) => {
      console.log("Error adding data", err);
      res.status(500).json("Error adding");
    });

});

//get Admin by email 
router.route("/loginAdmin").post(async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email, password });
    if (admin) {
      
      res.status(200).send({ status: "exist", admin });
    } else {
      res.status(404).send("not exist");
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error with login");
  }
});


module.exports = router ;