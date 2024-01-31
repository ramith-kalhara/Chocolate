const router = require("express").Router();

let Order = require('../models/Order');
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
router.route("/add").post(upload.single('chocoimg'), (req, res) => {
 

  
  const {  Userid,chocoid, chocoimg, chocoName, price, Username, UserAddress,tp_number} = req.body;

  if (  !Userid || !chocoid || !chocoimg || !chocoName || !price || !Username|| !UserAddress || !tp_number) {
    return res.status(400).json({ error: 'Invalid or missing fields.' });
  }

  const newOrder = new Order({ Userid, chocoid, chocoimg, chocoName, price, tp_number, Username,UserAddress});

  newOrder.save()
    .then(() => {
      res.status(201).json({ message: 'User added successfully.' });
    })
    .catch((err) => {
      console.log("Error adding data", err);
      res.status(500).json("Error adding");
    });

});

//delete

router.route("/delete/:orderId").delete(async (req, res) =>{
  let orderId = req.params.orderId;
  
  await  Order.findByIdAndDelete(orderId).then(() =>{
    res.status(200).send({status:"Order Deleted"});
  }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status : "Error with delete User",error : err.message});
  })
})

//fetch all Order
router.route("/").get((req,res)=>{
  Order.find().then((order)=>{
      res.json(order);
  }).catch((err)=>{
      console.log(err);
  })
});

//feth only User Orders 
router.route("/get/:Userid").get(async (req, res) => {
  let Userid = req.params.Userid.trim(); 

  try {
      const order = await Order.find({ Userid: Userid });
      if (order) {
          res.status(200).send({ status: "order fetch",order });
      } else {
          res.status(404).send({ status: "order not found" });
      }
  } catch (err) {
      console.log(err.message);
      res.status(500).send({ status: "error with find", error: err.message });
  }
});

module.exports = router ;