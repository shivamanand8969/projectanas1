import Connect from '@/app/db/Connnect';
import User from '@/app/usemodel/User';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'
export let POST=async(req)=>{
    await Connect();
    let data=await req.json();
    let {name,username,password}=data;
    let hashedpassword=await bcrypt.hash(password,8);
    let checkdata=await User.findOne({username:username})
    if(checkdata){
        return NextResponse.json({"msg":"please Enter a unique username"})   }
    else{
        let newdata=await new User({name,username,password:hashedpassword});
        try{
            newdata=await newdata.save();
            return NextResponse.json({newdata,"msg":"data inserted"});     }
        catch(e){
            return NextResponse.json({"msg":e.message})
        } }}
