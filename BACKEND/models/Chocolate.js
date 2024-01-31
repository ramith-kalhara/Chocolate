const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChocolateSchema = new Schema({
  

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
  }


})

const Chocolate = mongoose.model("Chocolate", ChocolateSchema);

module.exports = Chocolate ; 