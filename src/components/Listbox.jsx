import React from 'react'
import Button from './Button'

const Listbox = ({item,addquantity}) => {
  return (
    <div style={{border:"1px solid black",width:"300px",display:"flex",justifyContent:"space-around",margin:"auto"}}>
        <h2>{item.name}</h2>
        <h3>{`₹${item.price}`}</h3>
        <Button count={item.quantity} addquantity={addquantity} id={item.id}/>
    </div>
  )
}

export default Listbox