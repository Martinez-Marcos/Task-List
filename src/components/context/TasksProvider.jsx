/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { TasksContext, SetTasksContext } from './createdContexs'

export function TasksProvider ({ children }) {
  const [tasks, setTasks] = useState([])

  return (
    <TasksContext.Provider value={tasks}>
      <SetTasksContext.Provider value={setTasks}>
        {children}
      </SetTasksContext.Provider>
    </TasksContext.Provider>
  )
}
