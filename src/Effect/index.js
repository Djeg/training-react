import { takeLatest, call, put } from 'redux-saga/effects'
import { FETCH_TODO, addTodo, toggleError } from '../State/Todos'

export function* rootSaga() {
  yield takeLatest(FETCH_TODO, fetchTodo)
}

export function* fetchTodo(action) {
  try {
    const response = yield call(
      fetch,
      process.env.REACT_APP_TODO_URL
    )
    const json = yield call(
      [response, 'json']
    )

    yield put(
      addTodo(json.todos)
    )
  } catch (e) {
    yield put(
      toggleError()
    )
  }
  console.log(action)
}
