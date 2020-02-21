import * as Eff from 'redux-saga/effects'
import * as SurveyList from './SurveyList'
import * as SurveyListState from '../State/SurveyList'
import * as Api from '../Util/Api'

test(`
  it defined a root saga that listen to the survey list actions
`, () => {
  const iterator = SurveyList.rootSaga()
  const result = iterator.next()

  expect(result.value).toEqual(Eff.takeEvery(
    SurveyListState.fetch,
    SurveyList.fetchSurveySaga,
  ))
})

test(`
  it fetches the surveys and put them into our state
`, () => {
  const iterator = SurveyList.fetchSurveySaga()

  const callApiResult = iterator.next()
  expect(callApiResult.value).toEqual(Eff.call(Api.fetchSurveys))

  const putSurveysResult = iterator.next([ 'survey1', 'survey2' ])
  expect(putSurveysResult.value).toEqual(Eff.put(SurveyListState.received(
    [ 'survey1', 'survey2' ]
  )))

  const doneResult = iterator.next()

  expect(doneResult.done).toBe(true)
})

test(`
  it put survey list fail action if something went badly during the
  api call
`, () => {
  const iterator = SurveyList.fetchSurveySaga()

  const callApiResult = iterator.next()
  expect(callApiResult.value).toEqual(Eff.call(Api.fetchSurveys))

  const error = Error('oups')
  const putFailResult = iterator.throw(error)
  expect(putFailResult.value).toEqual(Eff.put(SurveyListState.fail(error)))

  const doneResult = iterator.next()

  expect(doneResult.done).toBe(true)
})
