import * as Eff from 'redux-saga/effects'
import * as Api from '../Util/Api'
import * as SurveyState from '../State/Survey'
import * as Survey from './Survey'

test(`
  it defined a root saga that take every survey actions
`, () => {
  const iterator = Survey.rootSaga()

  const takeFetchResult = iterator.next()
  expect(takeFetchResult.value).toEqual(Eff.takeEvery(
    SurveyState.fetch,
    Survey.fetchSaga,
  ))

  expect(iterator.next().done).toBe(true)
})

test(`
  it fetch a single survey from the api
`, () => {
  const iterator = Survey.fetchSaga(SurveyState.fetch(10))

  const apiFetchResult = iterator.next()
  expect(apiFetchResult.value).toEqual(Eff.call(
    Api.fetchSurvey,
    10
  ))

  const survey = { id: 10 }
  const putSurveyResult = iterator.next(survey)
  expect(putSurveyResult.value).toEqual(Eff.put(
    SurveyState.received(survey)
  ))

  expect(iterator.next().done).toBe(true)
})

test(`
  it put a fail action if something went wrong during the
  survey request
`, () => {
  const iterator = Survey.fetchSaga(SurveyState.fetch(10))

  const apiFetchResult = iterator.next()
  expect(apiFetchResult.value).toEqual(Eff.call(
    Api.fetchSurvey,
    10
  ))

  const error = Error('youpsi')
  const putErrorResult = iterator.throw(error)
  expect(putErrorResult.value).toEqual(Eff.put(
    SurveyState.fail(error)
  ))

  expect(iterator.next().done).toBe(true)
})
