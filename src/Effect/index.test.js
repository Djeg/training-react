import * as Eff from 'redux-saga/effects'
import * as Effect from './index'
import * as SurveyList from './SurveyList'

test('it runs all our application saga', () => {
  const iterator : Iterator = Effect.rootSaga()
  const iteratorResult : IteratorResult = iterator.next()

  expect(iteratorResult.value).toEqual(Eff.all([
    Eff.fork(SurveyList.rootSaga)
  ]))
})
