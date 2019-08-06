import { ADD_TASK, DELETE_TASK, CHECK_TASK } from './types'

const initialState = {
  tasks: [{ name: "Погулять с собакой", id: 1, completed: false }, { name: "Поесть", id: 2, completed: true }]
};

export const rootReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.completed !== action.completed)
      }
    case CHECK_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => task.id === action.id ? { ...task, completed: !task.completed} : task )
      }
    default:
      return state;
  }
};
