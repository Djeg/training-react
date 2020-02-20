import { createSlice } from '@reduxjs/toolkit'
import { createFormDataField, createFormDataSliceReducer } from '../Util/State'

export const INITIAL_STATE = {
  title: null,
  answers: [],
  loading: true,
  sending: false,
  errors: [],
  formData: {
    ...createFormDataField('answer'),
    ...createFormDataField('username'),
  }
}

const slice = createSlice({
  name: 'survey',
  initialState: INITIAL_STATE,
  reducers: {
    ...createFormDataSliceReducer(),

    fetch: state => ({
      ...state,
      loading: true,
    }),

    received: (state, { payload: { title, answers } }) => ({
      ...state,
      title,
      answers,
      loading: false,
    }),

    fail: (state, { payload: error }) => ({
      ...state,
      errors: [ ...state.errors, error.message ],
    }),

    submit: state => ({
      ...state,
      sending: true,
      errors: [],
    }),
  }
})

export const { reducer } = slice
export const {
  fetch,
  received,
  fail,
  submit,
  changeFormData,
} = slice.actions
