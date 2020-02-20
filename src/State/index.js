import * as SurveyList from './SurveyList'
import { combineReducers } from 'redux'

export const reducer = combineReducers({
  surveyList: SurveyList.reducer,
})
