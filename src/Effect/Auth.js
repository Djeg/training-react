import * as Eff from 'redux-saga/effects'
import * as Auth from '../State/Auth'
import * as Api from '../Util/Api'

export function* fetchRolesSaga() {
  const roles = yield Eff.call(Api.fetchRoles)

  yield Eff.put(Auth.receivedRoles(roles))
}

export function* fetchUserSaga() {
  const user = yield Eff.call(Api.fetchMe)

  yield Eff.put(Auth.receivedUser(user))
}

export function* rootSaga() {
  yield Eff.takeEvery(Auth.fetchRoles, fetchRolesSaga)
  yield Eff.takeEvery(Auth.fetchUser, fetchUserSaga)
}

