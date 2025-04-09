import React from 'react'
import { TaskCard } from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


export function TaskList() {

    const {tasks}= useContext(TaskContext)


    if(tasks.length===0){
        return <h1 className='text-white text-4xl font-bold text-center p-5'>No TASKS</h1>
    }
    



    //tasks.forEach(task=>console.log(task))

return (
    <div className='grid grid-cols-4 gap-2'>
        {
            tasks.map((task)=>(
                <TaskCard key={task.id} task={task}/>
            ))
        }
    </div>
)
}

