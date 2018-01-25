import { combineReducers } from 'redux';

const isRunning = (state = {}, action) => {
  switch (action.status) {
    case 'start':
      return { ...state, [action.type]: true };
    case 'error':
    case 'done':
      return { ...state, [action.type]: false };
    default:
      return state;
  }
};

const isDone = (state = {}, action) => {
  switch (action.status) {
    case 'start':
    case 'error':
      return { ...state, [action.type]: false };
    case 'done':
      return { ...state, [action.type]: true };
    default:
      return state;
  }
};

const doneAt = (state = {}, action) => {
  switch (action.status) {
    case 'done':
      return { ...state, [action.type]: (new Date()).toString() };
    default:
      return state;
  }
};

export default combineReducers({
  isRunning,
  isDone,
  doneAt,
});
