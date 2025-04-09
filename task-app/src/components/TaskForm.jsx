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
    
        <form onSubmit={handleSubmit}> 
            <input placeholder='enter a title' 
            onChange={handleTitleChange}
            value={title}
            autoFocus
            />
            <textarea style={{marginLeft:"10px"}} 
            placeholder='write tasks description' 
            onChange={handleDescriptionChange}
            value={description}>
            </textarea>
            <button style={{margin:"15px"}}>Save</button>
        </form>

    
)
}


