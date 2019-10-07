import reducer, { load, receive, error, INITIAL_STATE } from './Surveys'

it('reduces to initial state if no action has been specified', () => {
  const state = reducer(undefined, {})

  expect(state).toEqual(INITIAL_STATE)
});

it('reduces load action', () => {
  const action = load()
  const state = reducer(undefined, action)

  expect(state).toEqual({
    ...INITIAL_STATE,
    loading: true,
  })
});

it('reduces receive action', () => {
  const data = [
    { id: 1, name: 'Do you like chocolate ?' }
  ]
  const action = receive(data)
  const state = reducer(undefined, action)

  expect(state).toEqual({
    ...INITIAL_STATE,
    loading: false,
    data,
  })
});

it('reduces error action', () => {
  const err = Error('Something bas happens')
  const action = error(err)
  const state = reducer(undefined, action)

  expect(state).toEqual({
    ...INITIAL_STATE,
    loading: false,
    error: err,
  })
});
