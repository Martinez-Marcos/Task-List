/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Button } from '../Button/Button'
import './style.css'
import { useTaskContext } from '../../Hooks/useTaskContext'

export const TaskItem = ({ id, text, completed, onDelete }) => {
  const [tasks] = useTaskContext()
  const [valueP, setValueP] = useState(text)
  const [status, setStatus] = useState(completed)
  // const [completeElement, setCompleteElement] = useState(completed)
  const changeStatus = (id) => {
    const indexTask = tasks.findIndex((t) => t.id === id)
    const newTasklist = [...tasks]
    newTasklist[indexTask].completed = !newTasklist[indexTask].completed
    modifyLocalList(newTasklist)
    setStatus(newTasklist[indexTask].completed)
  }

  const modifyLocalList = (newlist) => {
    localStorage.setItem('localTask', JSON.stringify(newlist))
  }

  function editText (id) {
    const newText = prompt('Ingrese el nuevo texto:')
    setValueP(newText)
    const indexTask = tasks.findIndex((t) => t.id === id)
    const newlist = [...tasks]
    newlist[indexTask].text = newText
    modifyLocalList(newlist)
  }
  return (
    <div className="taskItem" id= {id}>
      <input type="checkbox" onChange={() => changeStatus(id)} checked={status} />
      <p>{ valueP }</p>
      <Button text = 'Eliminar' handleClick = {() => { onDelete(id) } }></Button>
      <Button text = 'Editar' handleClick = {() => { editText(id) }}></Button>
    </div>
  )
}
