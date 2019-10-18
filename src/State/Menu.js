import { createSlice } from 'redux-starter-kit'

// Toujours mettre cet etat initial du state
export const INITIAL_STATE = { open: false }

const slice = createSlice({
  name: 'menu',
  initialState: INITIAL_STATE,
  reducers: {
    toggelMenu: (state, action) => ({
      ...state,
      open: !state.open,
    }),
  }
})

// // L'unique reducer
export default slice.reducer

// Les actions type
export const TOGGLE_MENU = String(slice.actions.toggelMenu)


// Les actions créateur
export const toggleMenu = slice.actions.toggelMenu
