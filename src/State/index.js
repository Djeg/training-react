import { combineReducers, createStore } from 'redux'
import menu from './Menu'

const rootReducer = combineReducers({
  menu,
})

export const store = createStore(rootReducer)
