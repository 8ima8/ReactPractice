import React from "react"
import { TaskList } from "./components/TaskList"
import {TaskForm} from "./components/TaskForm"
import { useState,useEffect } from "react"
import { tasks as data } from "./mocks/tasks"

function App(){

  const [tasks, setTasks] = useState([])

      useEffect(() => {
      setTasks(data)
      }, [])



  function createTask(taskTitle){
    
    const newTask = {
      id:tasks.length+1,
      title: taskTitle,
      description:"descripcion"
    }

    setTasks([...tasks,newTask])
  }



  return(
    <>
    <TaskForm createTask={createTask}/>
    <TaskList tasks={tasks}/>
    </>

  )
}

export default App
