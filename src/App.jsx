import React from 'react'
import { TaskList, TaskForm, Msg, TasksProvider } from './components/'
import './App.css'

function App () {
  return (
    <TasksProvider>
      <h1>Lista de Tareas</h1>
      <TaskForm></TaskForm>
      <TaskList/>
      <Msg message="Se modificaron las tareas"/>
    </TasksProvider>
  )
}

export default App
