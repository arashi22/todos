import {
  LOAD_TODOS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_ERROR,
} from '../constants/constants.js';
import { FETCH } from '../../middleware/middleware';

export const loadTodos = () => ({
  type: LOAD_TODOS,
  [FETCH]: {
    url: '/todos',
  },
})

export const todosLoaded = todos => ({
  type: LOAD_TODOS_SUCCESS,
  todos,
})

export const todoLoadingError = error => ({
  type: LOAD_TODOS_ERROR,
  error,
})
