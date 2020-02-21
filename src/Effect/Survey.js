import * as Eff from 'redux-saga/effects'
import * as Api from '../Util/Api'
import * as SurveyState from '../State/Survey'

export function* fetchSaga({ payload: id }) {
  try {
    const survey = yield Eff.call(Api.fetchSurvey, id)

    yield Eff.put(SurveyState.received(survey))
  } catch (error) {
    yield Eff.put(SurveyState.fail(error))
  }
}

export function* rootSaga() {
  yield Eff.takeEvery(SurveyState.fetch, fetchSaga)
}
