import React from "react";
// Aqui practicamos como envair y recibir props
export function UserCard({name, amount, married, array, address}){
    return(
        <div>
            <h1>Mi nombre es {name}</h1>
            <p>Tengo {amount} USD</p>
            <p>{married ? "Married" : "Single" }</p>
            <p> My highest score is {Math.max(...array)}</p>
            <ul>
                <li>City: {address.city}</li>
                <li>Street: {address.street}</li>
                <li>House Number: {address.houseNumber}</li>
            </ul>
        </div>
    )
}