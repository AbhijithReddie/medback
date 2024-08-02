const mongoose = require("mongoose");
const loginSchema = mongoose.Schema({
   
    email:{
        type:String,
        required:true
    },
   password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        default:'',
    }
});
const loginModel = mongoose.model("login", loginSchema);
module.exports = {loginModel,loginSchema};