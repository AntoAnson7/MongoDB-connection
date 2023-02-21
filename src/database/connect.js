const mongoose=require("mongoose");
mongoose.set('strictQuery',false);
const dbname="TEST";
const uri=`mongodb://127.0.0.1:27017/${dbname}`;

async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Connection Established to database")
    }
    catch(e){
        console.log(`Error- Connection failed: ${e}`);
    }
}

connect();