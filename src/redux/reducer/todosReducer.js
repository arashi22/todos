import {
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_ERROR,
} from '../constants/constants'

const initState = {
  todos: [],
  error: true,
};

export function todosReducer(state = initState, action) {
  switch (action.type) {
    case LOAD_TODOS_SUCCESS:
      return { error: false, todos: action.todos }
    case LOAD_TODOS_ERROR: 
      return { error: action.error }
    default:
      return state
  }
}
export default todosReducer