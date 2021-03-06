import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './redux/reducer/rootReducer'
import { rootSaga } from './redux/sagas/rootSaga';
import configMiddleware from './middleware/middleware';

export const history = createHistory()

const initialState = {}
const enhancers = []
const sagaMiddleware = createSagaMiddleware()

const middleware = [
  configMiddleware,
  sagaMiddleware,
  routerMiddleware(history),
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

sagaMiddleware.run(rootSaga)

export default store