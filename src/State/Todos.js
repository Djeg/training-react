import { createSlice } from 'redux-starter-kit'

// Toujours mettre cet etat initial du state
export const INITIAL_STATE = { data: [], hasError: false, reloadCounter: 0 }

const slice = createSlice({
  name: 'todos',
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    toggleError: (state) => ({
      ...state,
      hasError: !state.hasError,
    }),
    reloadTodo: (state) => ({
      ...state,
      reloadCounter: state.reloadCounter + 1,
    }),
  }
})

// // L'unique reducer
export default slice.reducer

// Les actions type
export const ADD_TODO = String(slice.actions.addTodo)
export const TOGGLE_ERROR = String(slice.actions.toggleError)
export const RELOAD_TODO = String(slice.actions.reloadTodo)

// Les actions créateur
export const addTodo = slice.actions.addTodo
export const toggleError = slice.actions.toggleError
export const reloadTodo = slice.actions.reloadTodo
