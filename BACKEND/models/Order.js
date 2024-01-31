const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  

  Userid :{
    type : String ,
    required : true
  },

  chocoid :{
    type : String ,
    required : true
  },
  chocoimg :{
    type : String,
    required : true

  },
  chocoName :{
    type : String ,
    required : true
  },

  price :{
    type : String ,
    required : true
  },
  Username : {
    type : String ,
    required : true 
  },

  UserAddress : {
    type : String,
    required : true
  },
  tp_number : {
    type : Number,
    required : true
  }


})

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order ; 