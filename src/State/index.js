import { configureStore } from 'redux-starter-kit'
import createSagaMiddleware from 'redux-saga'
import eff from '../Effect'
import surveys from './Surveys'

export default () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: {
      surveys,
    },
    middleware: [ sagaMiddleware ],
  })

  sagaMiddleware.run(eff)

  return store
}
