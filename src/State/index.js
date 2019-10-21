import { combineReducers, createStore, applyMiddleware } from 'redux'
import menu from './Menu'
import todos from './Todos'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../Effect'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  menu,
  todos,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
