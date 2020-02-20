import * as State from './index'
import * as SurveyList from './SurveyList'

test('it contains the survey list state / reducer', () => {
  const state = State.reducer(undefined, {})

  expect(state.surveyList).toEqual(SurveyList.INITIAL_STATE)
})

