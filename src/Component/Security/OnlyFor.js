import React from 'react'
import { useSelector } from 'react-redux'
import * as Auth from '../../State/Auth'

export const OnlyFor = ({
  role = "USER",
  FallbackComponent = null,
  children,
  ...restProps
}) => {
  const user = useSelector(state => state.auth.user)
  const roles = useSelector(state => state.auth.roleHierarchy)

  return user && Auth.hasRight(user.role, role, roles)
    ? children
    : FallbackComponent
      ? <FallbackComponent {...restProps} />
      : null
}
