import { combineReducers, createStore } from 'redux'

export const TOGGLE_MENU = 'TOGGLE_MENU'

export const menu = (state = { menu: { open: false } }, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menu: { ...state.menu, open: !state.menu.open}
      }
    default:
      return state
  }
}

export const store = createStore(menu)
