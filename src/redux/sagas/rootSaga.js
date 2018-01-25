import { all } from 'redux-saga/effects';
import todosSaga from './todosSaga';

export function* rootSaga(getState) {
  yield all([
    todosSaga(),
  ]);
}

export default rootSaga;