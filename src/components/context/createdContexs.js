import { createContext } from 'react'

const TasksContext = createContext('listTasks')
const SetTasksContext = createContext('setTasks')

export { TasksContext, SetTasksContext }
