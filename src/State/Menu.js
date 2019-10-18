export const TOGGLE_MENU = 'TOGGLE_MENU'

export const reducer = (state = { open: false }, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        open: !state.open,
      }
    default:
      return state
  }
}
