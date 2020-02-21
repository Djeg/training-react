import * as Eff from 'redux-saga/effects'
import * as Effect from './index'
import * as SurveyList from './SurveyList'
import * as Survey from './Survey'
import * as Auth from './Auth'
import * as Form from './Form'

test('it runs all our application saga', () => {
  const iterator : Iterator = Effect.rootSaga()
  const iteratorResult : IteratorResult = iterator.next()

  expect(iteratorResult.value).toEqual(Eff.all([
    Eff.fork(SurveyList.rootSaga),
    Eff.fork(Survey.rootSaga),
    Eff.fork(Auth.rootSaga),
    Eff.fork(Form.rootSaga),
  ]))

  expect(iterator.next().done).toBe(true)
})
