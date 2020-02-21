import * as Auth from './Auth'
import * as Eff from 'redux-saga/effects'
import * as AuthState from '../State/Auth'
import * as Api from '../Util/Api'

test(`
  it contains a root saga that takeEvery auth actions
  and launch corresponding saga
`, () => {
  const iterator = Auth.rootSaga()

  expect(iterator.next().value).toEqual(Eff.takeEvery(
    AuthState.fetchRoles,
    Auth.fetchRolesSaga,
  ))
  expect(iterator.next().value).toEqual(Eff.takeEvery(
    AuthState.fetchUser,
    Auth.fetchUserSaga,
  ))

  expect(iterator.next().done).toBe(true)
});

test(`
  it can fetch the roles from the API
`, () => {
  const iterator = Auth.fetchRolesSaga()
  const roles = { 'ADMIN': [ 'USER' ] }

  expect(iterator.next().value).toEqual(Eff.call(
    Api.fetchRoles
  ))

  expect(iterator.next(roles).value).toEqual(Eff.put(
    AuthState.receivedRoles(roles)
  ))

  expect(iterator.next().done).toBe(true)
});

test(`
  it can fetch the user from the API
`, () => {
  const iterator = Auth.fetchUserSaga()
  const user = { id: 1 }

  expect(iterator.next().value).toEqual(Eff.call(
    Api.fetchMe
  ))

  expect(iterator.next(user).value).toEqual(Eff.put(
    AuthState.receivedUser(user)
  ))

  expect(iterator.next().done).toBe(true)
});
