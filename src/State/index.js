import * as SurveyList from './SurveyList'
import * as Survey from './Survey'
import * as Effect from '../Effect'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

export const createStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
    reducer: {
      surveyList: SurveyList.reducer,
      survey: Survey.reducer,
    },
    devTools: true,
    middleware: [ sagaMiddleware ]
  })

  sagaMiddleware.run(Effect.rootSaga)

  return store
}
