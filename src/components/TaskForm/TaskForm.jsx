import React, { useState } from 'react'
import { useTaskContext } from '../../Hooks/useTaskContext'
import './style.css'
import { Button } from '../Button/Button'

export const TaskForm = () => {
  const [stateInput, setInput] = useState('')
  const [tasks, setTasks] = useTaskContext()

  const addTask = (newTask) => {
    localStorage.setItem('localTask', JSON.stringify([...tasks, newTask]))
    localStorage.setItem('localID', JSON.stringify(newTask.id))
    setTasks([...tasks, newTask])
  }

  const deleteAll = () => {
    localStorage.removeItem('localTask')
    setTasks([])
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { value } = event.target.text
    console.log(localStorage.getItem('localID'))
    const localID = Number(localStorage.getItem('localID')) ?? 0

    if (value.trim() === '') return

    const newTask = {
      id: localID + 1,
      text: value,
      completed: false
    }
    console.log(newTask)
    addTask(newTask)

    setInput('')
  }

  function handleChange (e) {
    setInput(e.target.value)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input value={stateInput} name="text" type="text" onChange={handleChange} />
      <Button text= 'Agregar tarea' ></Button>
      <Button text= 'Eliminar todas las tareas' handleClick={deleteAll}></Button>
    </form>
  )
}
