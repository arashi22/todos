import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { todosReducer } from './todosReducer';
import fetch from '../../middleware';
export default combineReducers({
  AppReducer: todosReducer,
  routing: routerReducer,
  fetch,
})