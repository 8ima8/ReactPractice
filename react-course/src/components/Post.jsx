import React from "react";

export function Post(){

    const text = 'hola a todos'
    const number= 5
    const array = [1,2,'jaja']
    const object = {
        nombre:'fabian',
        edad:35
    }

    function Suma(x,y){
        return x+y
    }
    return(
        <div>
            <h1>Post 1</h1>
            <h2>
                Texto :{text} 
            </h2>
            <h2>
                Numero:{number} 
            </h2>
            <h2>
                Array{array.join(", ")}
            </h2>
            <h2>
                Objeto:{array.join(", ")}
            </h2>
            <h2>
                Funcion:{Suma(12,13)}
            </h2>
        </div>
    )
}