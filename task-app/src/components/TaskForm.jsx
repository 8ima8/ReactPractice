import React from 'react'
import { useState } from 'react'

export function TaskForm({createTask}) {

    const [title, setTitle] =useState("")
    const [description, setDescription] = useState("")

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

export default TaskForm
