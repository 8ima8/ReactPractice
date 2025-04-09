import React from "react"
import { TaskList } from "./components/TaskList"
import {TaskForm} from "./components/TaskForm"
import { useState,useEffect } from "react"
import { tasks as data } from "./mocks/tasks"

function App(){


  return(
    <>
    <TaskForm/>
    <TaskList/>
    </>

  )
}

export default App
