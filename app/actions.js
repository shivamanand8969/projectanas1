"use server"
import Connect from "./db/Connnect";

export let handleSubmit=async (forData)=>{
    let slug=forData.get('slug');
    let quality=forData.get('quality')
    let price=forData.get('price')
    await Connect();
    let data=await fetch("http://127.0.0.1:3000/api/product",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({slug,quality,price}),
    })
    data=await data.json();
   
}
export let handleDelete=async(getdata)=>{
    let id=getdata;
    let data=await fetch(`http://127.0.0.1:3000/api/product/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    })
      
}

