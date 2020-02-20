import * as SurveyList from './SurveyList'
import * as Survey from './Survey'
import { combineReducers } from 'redux'

export const reducer = combineReducers({
  surveyList: SurveyList.reducer,
  survey: Survey.reducer,
})
