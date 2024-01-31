const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  
  image :{
    type : String,
    required : true

  },
  email : {
    type:String,
    required : true
  },
  name : {
    type : String ,
    required : true 
  },

  address : {
    type : String,
    required : true
  },

  nic : {
    type : Number ,
    required : true 
  },

  tp_number : {
    type : Number,
    required : true
  },

  password :{
    type : String ,
    required : true
  }


})

const User1 = mongoose.model("UserDetail", UserSchema);

module.exports = User1 ; 