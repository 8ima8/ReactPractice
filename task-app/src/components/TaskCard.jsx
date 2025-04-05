import React from "react";

export function TaskCard ({task}){
    return(
                <div>
                    <h1>{task.title}</h1>
                    <h2>{task.description}</h2>
                    <button>Delete Task</button>
                </div>
    )
}

