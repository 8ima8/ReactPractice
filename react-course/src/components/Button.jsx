import React from "react";
import PropTypes from "prop-types";

export function Button({text, name='Usuario'}) {
    console.log(text)


    const handleChange= (e)=>{
        console.log(e.target.value)
    }

    return(
        <>
        <button>
            {text} - {name}
        </button>
        <input onChange={handleChange}></input>
        </>
    )
    
}

Button.PropTypes = {
    text : PropTypes.string.isRequired
}

