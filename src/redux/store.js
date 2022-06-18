import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)
export default store