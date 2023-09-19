"use client"
import React, {useEffect,  useState } from 'react'
import Form from './Form';
import { handleDelete } from '../actions';
import Link from 'next/link';
const Table = ({data1}) => {
   let [searchdata,setSearchdata]=useState("");
   let [isSearch,setIsSearch]=useState(false);
   let [productdata,setproductdata]=useState(data1);
   useEffect(()=>{
    if(searchdata.length > 0){
      setIsSearch(true)
    }else{
      setIsSearch(false)
    }
    if(isSearch){
     let newdata= productdata.filter((data)=>{
        return data.slug.toLowerCase().includes(searchdata.toLowerCase())
      })
      setproductdata(newdata);
    }
    else{
      setproductdata(data1);
    }
   },[isSearch,searchdata])
  return (
    <>
    <div className='bg-slate-800 h-full w-screen'>
  <div className='container bg-slate-600  mx-auto '>
    <h1 className='text-2xl py-2 font-bold text-white'>Search a Product </h1>
    <div className='flex mb-6 '>
      <input type='text' value={searchdata} onChange={(e)=>setSearchdata(e.target.value)} placeholder=' Enter the product name' className='flex-1 border border-gray-600'/>
      <select className='border border-gray-300 px-4 py-2 rounded-r-md'>
        <option value="">All</option>
        <option value="category">Category</option>
        <option value="category2">Category2</option>
        
      </select>
      <input type='submit' value={"submit"}/>
    </div>
  </div>
 <Form/>
  
 </div>
    <div>
    
    <div className="flex justify-center items-center bg-gray-900">
      <div className="w-full  bg-gray-800 rounded-lg shadow-xl">
        <table className="w-full table-auto border-white border-2">
          <thead className='border-white border-1'>
            <tr className="text-gray-300">
              <th className="px-4 py-2">Work</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody className="text-gray-100">   
         {
          productdata.map((value,key)=>(
            <tr key={key}>
            <td className="px-4 flex justify-center py-2">{value.slug}</td>
            <td className="px-4 text-center py-2">{value.quality}</td>
            <td className="px-4 text-center py-2">{value.price}</td>
            {/* <DeleteUser id={value._id}/> */}
            <td>
              <button type='submit' onClick={()=>handleDelete(value._id)} className='bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded-md '>Delete</button>
            </td>
            <td >
              <Link href={`/updateForm/${value._id}`} className='bg-green-500 hover:bg-green-700 px-4 py-2 rounded-md text-white'>Update</Link>
            </td>
          </tr>
          ))
         }
        </tbody>
        </table>
      </div>
    </div>
    </div>
    </>
  )
}

export default Table