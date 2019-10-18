import { createSlice } from 'redux-starter-kit'

// Toujours mettre cet etat initial du state
export const INITIAL_STATE = { open: false }

const slice = createSlice({
  name: 'menu',
  initialState: INITIAL_STATE,
  reducers: {
    toggleMenu: (state, action) => ({
      ...state,
      open: !state.open,
    }),
  }
})

// // L'unique reducer
export default slice.reducer

// Les actions type
export const TOGGLE_MENU = String(slice.actions.toggleMenu)

// Les actions créateur
export const toggleMenu = slice.actions.toggleMenu
