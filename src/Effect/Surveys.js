import * as Surveys from '../State/Surveys'
import { call, put, takeLatest } from 'redux-saga/effects'

export function* loadSurveySaga () {
  try {
    const data = yield call(fetchSurveysFromApi)

    yield put(Surveys.receive(data.data.listSurvey))
  } catch(error) {
    yield put(Surveys.error(error))
  }
}

export default function* () {
  yield takeLatest(`${Surveys.load}`, loadSurveySaga)
}

export const fetchSurveysFromApi = () =>
  fetch('http://localhost:6767/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          listSurvey {
            id,
            name,
            answers,
            author {
              firstname,
              lastname,
              email
            },
            createdAt
          }
        }
      `,
    })
  })
  .then(response => response.json())

// Action -> (Effect) -> State
//              |
//             HTTP
//              |
//            Action -> State
