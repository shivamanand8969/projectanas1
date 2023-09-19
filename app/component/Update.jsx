"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
const Update = ({data}) => {
    const [slug, setslug] = useState(data.slug);
    const [quality, setQuality] = useState(data.quality);
    const [price, setPrice] = useState(data.price);
    let router=useRouter()
    let handleUpdate=async(e)=>{
        e.preventDefault()
       let data1=await fetch(`/api/product/${data._id}`,{
        method:"PUT",
        body:JSON.stringify({slug,quality,price}),
        headers:{
            "Content-Type":"application/json"
        }, } )
       router.push("/")}
    return (
       <div className="h-screen w-full ">
         <div className="flex justify-center items-center mt-32 ">
            <form method='PUT' className="w-1/2 p-5 bg-slate-400 border-blue-600 shadow-2xl rounded-md">
                <div className="flex flex-col">
                    <label htmlFor="productName" className=" text-black mb-1">
                        Product slug
                    </label>
                    <input
                        value={slug}
                        onChange={(e)=>setslug(e.target.value)}
                        type="text"
                        id="productName"
                        className="px-4 py-2 bg-gray-700 text-gray-100 rounded h-9 outline-0 border-1 border-black focus:outline-none focus:bg-gray-600"
                        placeholder="Enter product name"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="quantity" className="text-black mb-1">
                        Quantity
                    </label>
                    <input
                        type="text"
                        id="quantity"
                      value={quality}
                      onChange={(e)=>setQuality(e.target.value)}
                        className="px-4 py-2 h-9 outline-0 border-1 border-black  bg-gray-700 text-gray-100 rounded focus:outline-none focus:bg-gray-600"
                        placeholder="Enter quantity"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="price" className="text-black-300 mb-1">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                        className="px-4 py-2 h-9 outline-0 border-1 border-black  bg-gray-700 text-gray-100 rounded focus:outline-none focus:bg-gray-600"
                        placeholder="Enter price"
                    />
                </div>
                <button onClick={handleUpdate} className="px-4 py-2 mt-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">Update</button>
            </form>
        </div>
       </div>
    )
}

export default Update