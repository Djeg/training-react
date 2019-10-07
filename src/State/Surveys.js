import { createSlice } from 'redux-starter-kit'

export const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
}

const slice = createSlice({
  slice: 'surveys',
  initialState: INITIAL_STATE,
  reducers: {
    load: (state, action) => ({
      ...state,
      loading: true,
    }),
    receive: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
    }),
    error: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    })
  },
})

export const load = slice.actions.load

export const receive = slice.actions.receive

export const error = slice.actions.error

export default slice.reducer
