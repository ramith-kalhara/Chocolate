const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  

  email : {
    type:String,
    required : true
  },
 

  password :{
    type : String ,
    required : true
  }


})

const Admin1 = mongoose.model("AdminDetails", UserSchema);

module.exports = Admin1 ; 