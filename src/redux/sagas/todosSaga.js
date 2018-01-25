import {put, call, takeLatest } from 'redux-saga/effects'
import request from '../../utils/request'
import {
  todosLoaded,
  todoLoadingError,
} from '../actions/actions'
import {
  LOAD_TODOS,
} from '../constants/constants.js'

export function* fetchTodosList(requestParams) {
  try {
    // Call request helper
    const todos = yield call(request, requestParams.url, requestParams.options)
    yield put(todosLoaded(todos))

  } catch (err) {
    yield put(todoLoadingError(err))
  }
}

export default function* todosSaga() {
  yield takeLatest(LOAD_TODOS, fetchTodosList)
}