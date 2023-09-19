const { default: mongoose } = require("mongoose");
const { NextResponse } = require("next/server");

let Connect=()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/productManagement");
    }catch(e){
       throw new Error("database Connection Failed");
    }
}
export default Connect;