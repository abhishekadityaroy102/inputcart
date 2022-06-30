import React, { useState } from 'react'

const Button = ({count,addquantity,id}) => {
   
    const btnstyle={
      width:"40px",
      height:"30px",
      margin:"auto",
      
      
    }
  return (
    <div style={{display:"flex",gap:"10px"}}>
        <button disabled={count==1} style={btnstyle} onClick={()=>addquantity(id,-1)}>-</button>
        <h3>{count}</h3>
        <button style={btnstyle}onClick={()=>addquantity(id,+1)}>+</button>
    </div>
  )
}

export default Button