import React, { useState } from 'react'

export default function Hook3() {
    const [name,setName]=useState("");
  return (
    <div>
        <h1>Hook 3, name:{name}</h1>
        
        <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}
