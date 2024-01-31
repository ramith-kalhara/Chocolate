const router = require("express").Router();

let User = require('../models/Chocolate');
const multer = require('multer');
const bodyParser = require('body-parser');
const path=require('path');
const Chocolate = require("../models/Chocolate");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images'); 
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });
router.route("/add").post(upload.single('chocoimg'), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file detected");
  }
  try {
   
    const chocoimg = req.file.filename;
    
    const { chocoName, price } = req.body;

    if (!chocoName || !price) {
      return res.status(400).json({ error: 'Invalid or missing fields.' });
    }

    const newChoco = new Chocolate({ chocoimg,chocoName, price });

    newChoco.save()
      .then(() => {
        res.status(201).json({ message: 'Chocolate added successfully.' });
      })
      .catch((err) => {
        console.error("Error saving data", err);
        res.status(500).json({ error: 'Error saving', details: err.message });
      });
  } catch (error) {
    console.error("Unexpected error", error);
    res.status(500).json({ error: 'Unexpected error', details: error.message });
  }
});


//get a Chocolate by id
router.route("/getchocoid/:id").get(async (req, res) => {
  let chocoid = req.params.id.trim();


  try {
      const chocolate = await chocolate.findById(chocoid);

      if (chocolate) {
          res.status(200).send({ status: "chocolate fetch", chocolate });
      } else {
          res.status(404).send({ status: "chocolate not found" });
      }
  } catch (err) {
      console.log(err.message);
      res.status(500).send({ status: "error with find", error: err.message });
  }
});


//delete

router.route("/chocoDelete/:chocoid").delete(async (req, res) =>{
  let chocoid = req.params.chocoid;
  
  await  Chocolate.findByIdAndDelete(chocoid).then(() =>{
    res.status(200).send({status:"User Deleted"});
    
  }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status : "Error with delete User",error : err.message});
  })
})

//fetch all Users
router.route("/").get((req,res)=>{
  Chocolate.find().then((chocolate)=>{
      res.json(chocolate);
  }).catch((err)=>{
      console.log(err);
  })
});


module.exports = router ;