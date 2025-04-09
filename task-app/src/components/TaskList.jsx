import React from 'react'
import { TaskCard } from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


export function TaskList() {

    const {tasks}= useContext(TaskContext)


    if(tasks.length===0){
        return <h1>No TASKS</h1>
    }
    



    //tasks.forEach(task=>console.log(task))

return (
    <div>
        {
            tasks.map((task)=>(
                <TaskCard key={task.id} task={task}/>
            ))
        }
    </div>
)
}

