import * as Eff from 'redux-saga/effects'
import * as SurveyList from '../State/SurveyList'
import * as Api from '../Util/Api'

export function* fetchSurveySaga() {
  try {
    // Eff.call will call the function and return the result
    // (it will automatically resolve promises)
    const surveys = yield Eff.call(Api.fetchSurveys)

    // Eff.put will take an action and dispatch it into
    // the redux store
    yield Eff.put(SurveyList.received(surveys))
  } catch (error) {
    yield Eff.put(SurveyList.fail(error))
  }
}

export function* rootSaga() {
  // Eff.takeEvery will wait for a given action and launch
  // the given saga
  yield Eff.takeEvery(SurveyList.fetch, fetchSurveySaga)
}
