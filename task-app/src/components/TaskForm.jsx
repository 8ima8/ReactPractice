import React from 'react'
import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

export function TaskForm() {

    const [title, setTitle] =useState("")
    const [description, setDescription] = useState("")
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(title,description)
        createTask(title,description)
        setTitle("")
        setDescription("")
    }

    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
        
    }

    const handleDescriptionChange = (e) =>{
        setDescription(e.target.value)
    }

return (
    
    <div className='max-w-md mx-auto'>
        <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'> 
            <h1 className='text-2xl font-bold text-white mb-3'>Create Task</h1>
            <input  className='bg-slate-300 p-3 w-full mb-2'placeholder='enter a title' 
            onChange={handleTitleChange}
            value={title}
            autoFocus
            />
            <textarea className='bg-slate-300 p-3 w-full mb-2' 
            placeholder='write tasks description' 
            onChange={handleDescriptionChange}
            value={description}>
            </textarea>
            <button className='bg-indigo-500 text-white px-3 py-1 w-full' >Save</button>
        </form>
    </div>

    
)
}


