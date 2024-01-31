const router = require("express").Router();

let User = require('../models/User');
const multer = require('multer');
const bodyParser = require('body-parser');
const path=require('path');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images'); // Update the directory path
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

//create  User 
router.route("/add").post(upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file detected");
  }

  const image = req.file.filename;
  const {  email, name, address, nic, tp_number, password} = req.body;

  if ( isNaN(nic) || !email || !name || !tp_number || !address || !image || !password) {
    return res.status(400).json({ error: 'Invalid or missing fields.' });
  }

  const newUser = new User({ image, email, name, address, nic, tp_number, password});

  newUser.save()
    .then(() => {
      res.status(201).json({ message: 'User added successfully.' });
    })
    .catch((err) => {
      console.log("Error adding data", err);
      res.status(500).json("Error adding");
    });

});

//get a User by id
router.route("/getid/:id").get(async (req, res) => {
  let userId = req.params.id.trim();


  try {
      const user = await User.findById(userId);

      if (user) {
          res.status(200).send({ status: "user fetch", user });
      } else {
          res.status(404).send({ status: "user not found" });
      }
  } catch (err) {
      console.log(err.message);
      res.status(500).send({ status: "error with find", error: err.message });
  }
});

//get a admin by email
router.route("/get/:id").get(async (req, res) => {
  let email = req.params.id.trim();

  try {
      const user = await User.find({ email: email });
      if (user) {
          res.status(200).send({ status: "user fetch", user });
      } else {
          res.status(404).send({ status: "user not found" });
      }
  } catch (err) {
      console.log(err.message);
      res.status(500).send({ status: "error with find", error: err.message });
  }
});



//update

router.route("/update/:userId").put(async (req, res) => {
  let userId = req.params.userId;
  const { email, name, address, nic, tp_number, password } = req.body;

  console.log("Request Body:", req.body);

  const updateUser = {
    email,
    name,
    address,
    nic,
    tp_number,
    password,
  };

  const update = await User.findByIdAndUpdate(userId, updateUser)
    .then(() => {
      console.log("User Updated");
      res.status(200).send({ status: "User Updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error with updating data" });
    });
});


//delete

router.route("/delete/:userId").delete(async (req, res) =>{
  let userId = req.params.userId;
  
  await  User.findByIdAndDelete(userId).then(() =>{
    res.status(200).send({status:"User Deleted"});
  }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status : "Error with delete User",error : err.message});
  })
})

//get user by email 
router.route("/login").post(async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      
      res.status(200).send({ status: "exist", user });
    } else {
      res.status(404).send("not exist");
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error with login");
  }
});

//fetch all Users
router.route("/").get((req,res)=>{
  User.find().then((user)=>{
      res.json(user);
  }).catch((err)=>{
      console.log(err);
  })
});


module.exports = router ;