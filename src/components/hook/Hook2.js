import { useState } from "react"

function Hook2(){
    console.log("render hook2")
    const [number,setNumber]=useState(10)

    function handle_Number_up(){
        setNumber(number+10)// count=count+1
    }
  
    return (
        <div>
            <p>Number: {number}</p>
            <button onClick={()=>setNumber(number+10)}>Number Up</button>
        </div>
    )
}
export default Hook2