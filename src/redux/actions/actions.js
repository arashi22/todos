import {
  LOAD_TODOS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_ERROR,
} from '../constants/constants.js';

export const loadTodos = () => ({
  type: LOAD_TODOS,
})

export const todosLoaded = todos => ({
  type: LOAD_TODOS_SUCCESS,
  todos,
})

export const todoLoadingError = error => ({
  type: LOAD_TODOS_ERROR,
  error,
})
