import React, { useEffect } from 'react'
import { TaskItem } from '../TaskItem/TaskItem'
import { useTaskContext } from '../../Hooks/useTaskContext'
import './style.css'

export const TaskList = () => {
  const [tasks, setTasks] = useTaskContext()

  const inicializationData = async () => {
    const existData = await JSON.parse(localStorage.getItem('localTask'))
    existData ? setTasks(existData) : setTasks([])
  }

  useEffect(() => {
    inicializationData()
  }, [])

  const deleteTask = (id) => {
    const indexTask = tasks.findIndex((task) => task.id === id)
    const newlist = [...tasks]
    newlist.splice(indexTask, 1)
    localStorage.setItem('localTask', JSON.stringify(newlist))
    setTasks(newlist)
  }

  return (
    <div className='lista'>
      {tasks.length !== 0
        ? tasks.map((t) =>
        <TaskItem
          key={t.id}
          id = {t.id}
          text={t.text}
          completed={t.completed}
          onDelete={deleteTask}
        />
        )
        : <p>No tienes tareas ve por cerveza...</p>}
    </div>
  )
}
