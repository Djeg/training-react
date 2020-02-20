import * as SurveyList from './SurveyList'

test(`
  it reduces to initial state
  when no state has been specified
`, () => {
  const state = SurveyList.reducer(undefined, {})

  expect(state).toEqual(SurveyList.INITIAL_STATE)
})

test(`
  it reduces fetch survey list action
`, () => {
  const action = SurveyList.fetch()
  const state = SurveyList.reducer(
    SurveyList.INITIAL_STATE,
    action
  )

  expect(state).toEqual({
    ...SurveyList.INITIAL_STATE,
    loading: true,
    error: null,
  })
})

test(`
  it reduces received survey list action
`, () => {
  const data = [ 'some', 'data' ]
  const action = SurveyList.received(data)
  const state = SurveyList.reducer(
    SurveyList.INITIAL_STATE,
    action
  )

  expect(state).toEqual({
    ...SurveyList.INITIAL_STATE,
    loading: false,
    error: null,
    data,
  })
})

test(`
  it reduces fail action
`, () => {
  const action = SurveyList.fail(Error('oups something bad happens'))
  const state = SurveyList.reducer(
    SurveyList.INITIAL_STATE,
    action
  )

  expect(state).toEqual({
    ...SurveyList.INITIAL_STATE,
    loading: false,
    error: null,
    error: 'oups something bad happens',
  })
})
