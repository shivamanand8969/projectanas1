import React from 'react'

const page = () => {
    let handleSubm=async (fordata)=>{
        "use server"
     let name=fordata.get('name');
     let username=fordata.get('username');
     let password=fordata.get('password');
       let data=await fetch("http://127.0.0.1:3000/api/product/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name,username,password})
       })
       data=await data.json();
       console.log(data);
    }
  return (
    <div>
        <div>Registraction Form </div>
        <div className=' bg-slate-600 text-white'>
        <form method='post' action={handleSubm} className='flex flex-col'>
            <label>Name</label>
            <input name='name' type='text' className='text-black  bg-gray-300' />
            <label>User's Name</label>
            <input  type='text' name='username' className='text-black bg-gray-300'/>
            <label>Password</label>
            <input type='text' name='password' className='text-black  bg-gray-300'/>
            <input type='submit' value="submit" />
        </form>
        </div>
    </div>
  )
}

export default page