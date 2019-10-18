// Toujours mettre cet etat initial du state
export const INITIAL_STATE = { open: false }

// Les actions type
export const TOGGLE_MENU = 'TOGGLE_MENU'

// L'unique reducer
export default (state = INITIAL_STATE, action = {}) => {
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

// Les actions créateur
export const toggleMenu = () =>
  ({
    type: TOGGLE_MENU
    // payload: les datas pour faire fonctionner l'action
  })
