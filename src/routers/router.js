const express=require("express");
const router=new express.Router();
const path=require("path");
const model=require("../models/schema");

const home_path=path.join(__dirname,"../../public/index.html");
const student_path=path.join(__dirname,"../../public/student.html");
const result_path=path.join(__dirname,"../../public/result.html");

router.get("/",(req,res)=>{
    res.sendFile(home_path);
})
router.get("/student",(req,res)=>{
    res.sendFile(student_path);
})

router.get("/student/result",(req,res)=>{
    res.sendFile(result_path);
})

module.exports=router;