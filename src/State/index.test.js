import * as State from './index'
import * as SurveyList from './SurveyList'

test('it contains the survey list state / reducer', () => {
  const store = State.createStore()
  const state = store.getState()

  expect(state.surveyList).toEqual(SurveyList.INITIAL_STATE)
})

