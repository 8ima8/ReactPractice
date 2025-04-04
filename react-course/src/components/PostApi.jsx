import React from "react";
import {VscGitFetch} from "react-icons/vsc";
import {VscBug} from "react-icons/vsc";
export function PostApi(){

    const handelClick=(e)=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }

    return(
        <div>
            <h1>FETCH & API</h1>
            <button onClick={handelClick}><VscGitFetch/> Jalar Datos  <VscBug/> </button>
        </div>
    )
}