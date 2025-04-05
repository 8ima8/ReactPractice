import React from 'react'


export function TaskList({tasks}) {


    if(tasks.length===0){
        return <h1>No TASKS</h1>
    }
    



    //tasks.forEach(task=>console.log(task))

return (
    <div>
        {
            tasks.map((task)=>(
                <div key={task.id}>
                    <h1>{task.title}</h1>
                    <h2>{task.description}</h2>
                </div>
            ))
        }
    </div>
)
}

