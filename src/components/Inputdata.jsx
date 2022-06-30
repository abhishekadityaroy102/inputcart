import React, { useState } from 'react'

const Inputdata = ({handleadd}) => {
    const [data,setdata]=useState({})
    const handlechange=(e)=>{
        const {name,value}=e.target   
        setdata({...data,[name]:value,id:Date.now()})
    }
    let {name,price,quantity}=data
   
  return (
    <div>Inputdata
        <input name="name" value={data.name} placeholder='Enter your food name' onChange={handlechange} required></input>
        <input onChange={handlechange} name="price" value={data.price} type="number"placeholder='Enter price'></input>
        <input onChange={handlechange} name="quantity" value={data.quantity} placeholder='Enter quantity' type="number"></input>
        <button onClick={()=>handleadd(data,setdata({name:"",price:"",quantity:""}))}>Save this</button>
    </div>
  )
}

export default Inputdata