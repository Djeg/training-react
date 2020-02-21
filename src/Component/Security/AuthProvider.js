import React from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../Util/Hook'
import * as Auth from '../../State/Auth'

export const AuthProvider = ({
  children,
}) => {
  const roles = useSelector(state => state.auth.roleHierarchy)
  const user = useSelector(state => state.auth.user)

  useActions([
    Auth.fetchRoles(),
    Auth.fetchUser(),
  ])

  return roles
    ? children
    : null
}
