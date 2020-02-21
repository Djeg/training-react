import { createSlice } from '@reduxjs/toolkit'

/**
 * Define here the initial state of our SurveyList
 *
 * !WARNING! Must only contains SCALAR (never INSTANCES)
 *
 * !IMPORTANT! Everything here must be PURE (meaning:
 * 1. NO MUTATION
 * 2. NO THROW
 * 3. NO PROMISES
 * )
 */
export const INITIAL_STATE = {
  loading: true,
  error: null,
  data: [],
}

const slice = createSlice({
  name: 'surveyList',
  initialState: INITIAL_STATE,
  reducers: {
    fetch: state => ({
      ...state,
      loading: true,
    }),

    fail: (state, { payload: error }) => ({
      ...state,
      loading: false,
      error: error.message,
    }),

    received: (state, { payload: data }) => ({
      ...state,
      loading: false,
      error: null,
      data,
    })
  }
})

export const { reducer } = slice
export const {
  fetch,
  fail,
  received,
} = slice.actions

export const select = {
  data: state => state.surveyList.data,
  loading: state => state.surveyList.loading,
  error: state => state.surveyList.error,
}
