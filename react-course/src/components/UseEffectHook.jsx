import React, { useState } from "react";
import { useEffect } from "react";

export function UseEffectHooks(){
    
    
    const [counter,setCounter] = useState(0)

    useEffect(()=>{
        console.log("render")
    },[counter])


    return(
        <div>
            <h2 style={{color:"red"}}>useEffect</h2>
            <h3>useEffect will trigger every time you press the "increment" button(check console)</h3>
            <h2>Counter: {counter}</h2>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>Increment</button>
        </div>
    )
}