import React from "react";

export function UserArray(){
    //un array de  objetos
    const users= [
        {
            id:1,
            name:"Fabian Beltran",
            image:"https://robohash.org/robofabian"
        },
        {
            id:2,
            name:"Daniela Guerra",
            image:"https://robohash.org/robodaniela"
        }

    ]

    return(
        <div>
            <h1>USER ARRAY LIST</h1>
            {users.map(user=>{
                return (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <img src={user.image}/>
                </div>
                )
            })}
        </div>
    )
}