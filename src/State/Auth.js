import { createSlice } from '@reduxjs/toolkit'

export const INITIAL_STATE = {
  roleHierarchy: null,
  user: {
    id: null,
    role: 'ANONYMOUS',
  }
}

const slice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    fetchRoles: state => state,

    fetchUser: state => state,

    receivedRoles: (state, { payload: roleHierarchy }) => ({
      ...state,
      roleHierarchy,
    }),

    receivedUser: (state, { payload: user }) => ({
      ...state,
      user,
    }),
  }
})

export const { reducer } = slice
export const {
  fetchRoles,
  fetchUser,
  receivedRoles,
  receivedUser,
} = slice.actions

export const select = {
  roleHierarchy: state => state.auth.roleHierarchy,
  user: state => state.auth.user,
}

export const hasRight = (role, expectedRole, roles) => {
  const ownedRoles = roles[role]

  if (!ownedRoles || ownedRoles.length === 0) {
    return false
  }

  for (let availableRole of ownedRoles) {
    if (availableRole === expectedRole || hasRight(availableRole, expectedRole, roles)) {
      return true
    }
  }

  return false
}

