import React from 'react'

const page = () => {
     let hsubmit=async (forData)=>{
        "use server"
        console.log(forData)
            
    }
    
    return (
   <>
   <div className='flex flex-col gap-2 bg-slate-400 h-screen w-full'>
    <div className='flex justify-center items-center bg-gray-950 h-2/4 w-2/3 '>
    <form method='POST' className='flex flex-col gap-2' onSubmit={hsubmit}>
        <label className='text-white'>User Name</label>
        <input className='h-9 outline-0 border-1 border-black ' type='text' name='username'/>
        <lable className="text-white">Password</lable>
        <input className=' h-9 outline-0 border-1 border-black' type='text' name='password'/>
        <input type='submit' className='bg-green-600 px-5 p-3 rounded-sm hover:bg-green-700' value="submit"/>
    </form>
    </div>
   </div>
   </>
  )
}

export default page