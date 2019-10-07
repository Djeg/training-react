import * as Surveys from './Surveys'
import createStore from './index'

it('creates a store with the application state', () => {
  const store = createStore()
  const state = store.getState()

  expect(state.surveys).toEqual(Surveys.INITIAL_STATE)
});
