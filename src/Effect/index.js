import * as Eff from 'redux-saga/effects'
import * as SurveyList from './SurveyList'
import * as Survey from './Survey'
import * as Auth from './Auth'
import * as Form from './Form'

export function* rootSaga() {
  // Eff.all will run all the saga one by one
  yield Eff.all([
    // Eff.fork will make our saga `asynchronously`
    Eff.fork(SurveyList.rootSaga),
    Eff.fork(Survey.rootSaga),
    Eff.fork(Auth.rootSaga),
    Eff.fork(Form.rootSaga),
  ])
}
