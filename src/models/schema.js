const mongoose=require("mongoose");
mongoose.set('strictQuery',false);

const userSchema=new mongoose.Schema({
    name:String,
    id:Number,
    email:String
});

const patientSchema=new mongoose.Schema({
    name:String,
    condition:String,
    refID:String,
    doctors:Array
});

const userModel=new mongoose.model("TestUser",userSchema);
const patientModel=new mongoose.model("TestPatient",patientSchema);

const schemas=[userModel,patientModel];

module.exports=schemas;