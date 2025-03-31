import React from "react";
import PropTypes from "prop-types";

export function Button({text, name='Usuario'}) {
    console.log(text)



    return(
        <button>
            {text} - {name}
        </button>
    )
    
}

Button.PropTypes = {
    text : PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'Some User'
}