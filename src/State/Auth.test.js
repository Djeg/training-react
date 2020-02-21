import * as Auth from './Auth'

test(`
  it reduces to initial state when no action is specified
`, () => {
  const state = Auth.reducer(undefined, {})

  expect(state).toEqual(Auth.INITIAL_STATE)
});

test(`
  it reduces fetch / received roles and 
  fecth / received user action
`, () => {
  const fetchRoles = Auth.fetchRoles()
  const fetchUser = Auth.fetchUser()
  const roles = { 'ADMIN': [ 'USER' ] }
  const user = { id: 1 }
  const receivedRoles = Auth.receivedRoles(roles)
  const receivedUser = Auth.receivedUser(user)

  const firstActions = [
    fetchRoles,
    fetchUser,
  ]

  const secondActions = [
    receivedRoles,
    receivedUser,
  ]

  const firstState = firstActions.reduce(Auth.reducer, Auth.INITIAL_STATE)
  const secondState = secondActions.reduce(
    Auth.reducer,
    Auth.INITIAL_STATE,
  )

  expect(firstState).toEqual(Auth.INITIAL_STATE)
  expect(secondState).toEqual({
    roleHierarchy: roles,
    user,
  })
});
