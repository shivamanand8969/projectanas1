import Connect from "@/app/db/Connnect";
import Product from "@/app/modals/Product";
import { NextResponse } from "next/server";

export let GET=async(req,content)=>{
    await Connect();
    let id=content.params.id;
    // let {id}=params;
   let data=await Product.findById(id);
   return NextResponse.json({data});
}
export let DELETE= async (req,content)=>{
    await Connect();
    let id=content.params.id;
    try{
        await Product.findByIdAndDelete(id);
        return NextResponse.json({"msg":"Data Deleted Successfully"});
    }catch(e){
        return NextResponse.json({"msg":e.message});
    }
}

export let PUT=async (req,{params})=>{
    await Connect();
    let data=await req.json();
    let {id}=params;
    let updatedata;
    try{
       updatedata= await Product.findByIdAndUpdate(id,data);
       
    }
    catch(e){
        return NextResponse.json({"msg":e.message});
    }
    return NextResponse.json({updatedata,"msg":"Data Update Successfully"});
}