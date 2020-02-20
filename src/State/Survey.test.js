import * as Survey from './Survey'

test(`
  it reduces to initial state when no action
  and state are specified
`, () => {
  const state = Survey.reducer(undefined, {})

  expect(state).toEqual(Survey.INITIAL_STATE)
})

test(`
  it reduces the change form data action
`, () => {
  const changeUsername = Survey.changeFormData({
    name: 'username',
    value: 'foo',
  })
  const changeAnswer = Survey.changeFormData({
    name: 'answer',
    value: 0,
  })
  const errorUsername = Survey.changeFormData({
    name: 'username',
    errors: [ 'Too short username' ]
  })
  const errorAnswer = Survey.changeFormData({
    name: 'answer',
    errors: [ 'Bad answer' ]
  })
  const changeAnswer2 = Survey.changeFormData({
    name: 'answer',
    value: 1,
  })

  const actions = [
    changeUsername,
    changeAnswer,
    errorUsername,
    errorAnswer,
    changeAnswer2,
  ]

  const state = actions
    .reduce(Survey.reducer, Survey.INITIAL_STATE)

  expect(state).toEqual({
    ...Survey.INITIAL_STATE,
    formData: {
      ...Survey.INITIAL_STATE.formData,
      username: {
        value: 'foo',
        errors: [ 'Too short username' ]
      },
      answer: {
        value: 1,
        errors: [],
      }
    }
  })
})

test(`
  it reduces the fetch survey action
`, () => {
  const action = Survey.fetch()
  const state = Survey.reducer(undefined, action)

  expect(state).toEqual({
    ...Survey.INITIAL_STATE,
    loading: true,
  })
})

test(`
  it reduces the received survey action
`, () => {
  const survey = {
    id: 3,
    title: 'Test',
    answers: [ 'Yes', 'Maybe', 'No' ],
  }
  const action = Survey.received(survey)
  const state = Survey.reducer(undefined, action)

  expect(state).toEqual({
    ...Survey.INITIAL_STATE,
    loading: false,
    title: survey.title,
    answers: survey.answers,
  })
})

test(`
  it reduces the submit and fail action
`, () => {
  const firstError = Survey.fail(Error('oupsi'))
  const secondError = Survey.fail(Error('oupsi³'))
  const firstState = [
    firstError,
    secondError,
  ].reduce(Survey.reducer, Survey.INITIAL_STATE)

  const submit = Survey.submit()
  const secondState = Survey.reducer(firstState, submit)

  expect(firstState).toEqual({
    ...Survey.INITIAL_STATE,
    errors: [ 'oupsi', 'oupsi³' ],
  })
  expect(secondState).toEqual({
    ...Survey.INITIAL_STATE,
    sending: true,
    errors: [],
  })
})
