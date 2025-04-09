import React from 'react'
import { createContext,useState, useEffect } from 'react'
import { tasks as data } from '../mocks/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([])


    function createTask(taskTitle,taskDescription){
        const newTask = {
            id:tasks.length,
            title: taskTitle,
            description:taskDescription
        }
        setTasks([...tasks,newTask])
    }


    function deleteTask(taskId){
        const deletedTask=tasks.filter(task=> task.id !== taskId)
        setTasks(deletedTask)
        //console.log(tasks)
    }


    useEffect(() => {
        setTasks(data)
        }, [])


return (
    <TaskContext.Provider value={{
        tasks: tasks,
        deleteTask:deleteTask,
        createTask:createTask
    }}>
        {props.children}
    </TaskContext.Provider>
)
}

