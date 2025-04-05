import React from 'react'
import { useState } from 'react'

export function TaskForm({createTask}) {

    const [title, setTitle] =useState("")
    //const [description, setDescription] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(title)
        createTask(title)
        
    }

    const handleChange = (e) =>{
        setTitle(e.target.value)
        
    }

return (
    
        <form onSubmit={handleSubmit}> 
            <input placeholder='enter a title' onChange={handleChange}/>
            <button style={{margin:"15px"}}>Save</button>
        </form>

    
)
}

export default TaskForm
