import React, { useState } from "react";

export function UseStateHook(){

    // state for the counter
    const [counter, setCounter]=  useState(0)

    // state for the input
    const [message, setMessage] = useState("")



    return(
        <>
        <hr/>
        <div>
            <h1>HOOKS</h1>
            <h2 style={{color:"red"}}>useState</h2>
            <h2>Counter: {counter}</h2>
            <button style={{margin:"5px"}} 
            onClick={
                ()=>{
                setCounter(counter+1)
            }}
            >Increment</button>

            <button style={{margin:"5px"}} onClick={()=>{
                setCounter(counter-1)
            }}>Decrement</button>

            <button style={{margin:"5px"}} onClick={()=>{
                setCounter(0)
            }}>Restart Value</button>
        </div>
        <div>
            <input placeholder="write" onChange={(e) =>{
                console.log(e.target.value)
                setMessage(e.target.value)
            }}/>
            <button style={{marginLeft:"15px"}}
            onClick={()=>{
                alert("Saved message is: "+message)
            }}>Save</button>
        </div>
        </>


)
}