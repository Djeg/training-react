import { combineReducers, createStore } from 'redux'
import * as Menu from './Menu'

const rootReducer = combineReducers({
  menu: Menu.reducer,
})

export const store = createStore(rootReducer)
