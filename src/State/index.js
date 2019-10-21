import { combineReducers, createStore } from 'redux'
import menu from './Menu'
import todos from './Todos'

const rootReducer = combineReducers({
  menu,
  todos,
})

export const store = createStore(rootReducer)
