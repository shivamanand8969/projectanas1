import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'
import User from "@/app/usemodel/User";
export let POST=async (req)=>{
    let {username,password}=await req.json();
    let data=await User.findOne({username});
    if(!data){
        return NextResponse.json({"msg":"invalid username"});
    }
    let iscompare=bcrypt.compare(password,data.password);
    if(!iscompare){
        return NextResponse.json({"msg":"invalid password"});
    }
    let tokendata={
        id:data._id,
        name:data.name
    }
    let token=JWT.sign(tokendata,"tokenname",{expiresIn:"1h"});
    let response=NextResponse.json({"msg":"Login SuccessFully"});
    response.cookies.set("cookies name",token,{
        httpOnly:true
    })
    return response;
}