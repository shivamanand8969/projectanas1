import Update from '@/app/component/Update';
import React from 'react'

const page = async ({params}) => {
  let {put_id}=params;
  let callingData=await fetch(`http://127.0.0.1:3000/api/product/${put_id}`,{cache:"no-store"});
  callingData=await callingData.json();
  
  return (
    <div>
      <Update data={callingData.data}/>
    </div>
  )
}

export default page