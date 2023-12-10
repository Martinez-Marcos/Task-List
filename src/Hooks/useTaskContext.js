import { useContext } from 'react'
import { TasksContext, SetTasksContext } from '../components/context/createdContexs'

function useTaskContext () {
  const tasks = useContext(TasksContext)
  const setTasks = useContext(SetTasksContext)

  return [tasks, setTasks]
}

export { useTaskContext }
