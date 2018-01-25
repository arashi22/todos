import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { todosReducer } from './todosReducer';
export default combineReducers({
  AppReducer: todosReducer,
  routing: routerReducer
})