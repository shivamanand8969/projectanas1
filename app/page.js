import Table from "./component/Table";


export default async function Home() {
  let data1=await fetch("http://127.0.0.1:3000/api/product",{cache:"no-store"});
  data1=await data1.json();
  return (
  <>
 <Table data1={data1.data}/>
  </>
  )
}
