import Connect from "@/app/db/Connnect";
import Product from "@/app/modals/Product"
import { NextResponse } from "next/server";

export let GET=async ()=>{
    try{
        await Connect();
        let data= await Product.find({});
        return  NextResponse.json({data});
    }
    catch(e){
        return NextResponse.json(e.message);
    }
}
export let POST=async (req)=>{
    let data=await req.json();
    let newproduct=new Product(data);
    try{
        await newproduct.save();
        return NextResponse.json({newproduct,"msg":"data inserted Successfully"})
    }catch(e){
        return NextResponse.json({"msg":e.message});
    }
}