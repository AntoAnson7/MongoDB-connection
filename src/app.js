const express=require("express");
require("./database/connect");
const path=require("path");
const Router=require("./routers/router")
const models=require("./models/schema");//0-user 1-patient

const port=process.env.PORT||4000;

app=express();
app.use(express.json());
app.use(Router);
app.use(express.urlencoded({extended:false}))

app.listen(port,()=>{
    console.log(`Connection Established at port ${port}`)
})

