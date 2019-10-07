import surveys from './Surveys'
import { all, fork } from 'redux-saga/effects'

export default function* () {
  yield all([
    fork(surveys)
  ])
}
