import { ADD_TASK, DELETE_TASK, CHECK_TASK } from './types'

export const addTask = (newTask, newID) => {
    return {
      type: ADD_TASK,
      task: {
        name: newTask,
        id: newID,
        completed: false
      }
    }
  }

  export const deleteTask = (isCompleted) => {
    return {
      type: DELETE_TASK,
      completed: isCompleted
    }
  }

  export const checkTask = (id) => {
    return {
      type: CHECK_TASK,
      id: id
    }
  }