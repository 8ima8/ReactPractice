import React from "react";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

export function TaskCard ({task}){

    const {deleteTask} = useContext(TaskContext)
    


    return(
                <div className="bg-gray-800 text-white p-4 rounded-md"  >
                    <h1 className="text-xl font-bold capitalize">{task.title}</h1>
                    <h2 className="text-gray-500 text-sl">{task.description}</h2>
                    <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" 
                    onClick={()=>deleteTask(task.id)}>Delete Task</button>
                </div>
    )
}

