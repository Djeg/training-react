import * as State from './index'
import * as SurveyList from './SurveyList'
import * as Survey from './Survey'
import * as Auth from './Auth'

test('it creates the application store that contains all reducers', () => {
  const store = State.createStore()
  const state = store.getState()

  expect(state.surveyList).toEqual(SurveyList.INITIAL_STATE)
  expect(state.survey).toEqual(Survey.INITIAL_STATE)
  expect(state.auth).toEqual(Auth.INITIAL_STATE)
})

