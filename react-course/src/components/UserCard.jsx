import React from "react";
import './usercard.css'
// Aqui practicamos como envair y recibir props
export function UserCard({name, amount, married, array, address}){
    const nameStyles={
        background:"#202020",  
        color:"#fff", 
        padding:"20px",
        borderRadius:"20px"
        }

    const amountStyles={
        backgroundColor:"#340050",
        color:"#fff",
        fontWeight:"revert",
        padding:"10px",
        borderRadius:"20px",
        textAlign:"left",
        paddingTop:"10px",
        
        }
    
    const score=(Math.max(...array))

    return(
        <div>
            <h1 style={nameStyles}>Mi nombre es {name}</h1>
            <p style={amountStyles}>Tengo {amount} USD</p>
            <p className="married">{married ? "Married" : "Single" }</p>
            <p className={score>=51?"score-high":"score-low"} > My highest score is {score}</p>
            <ul>
                <li>City: {address.city}</li>
                <li>Street: {address.street}</li>
                <li>House Number: {address.houseNumber}</li>
            </ul>
        </div>
    )
}