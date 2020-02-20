import React, { useEffect, useState } from 'react'
import { hasRight } from './Firewall'
import * as Api from '../../Util/Api'

export const OnlyFor = ({
  role = "USER",
  FallbackComponent = null,
  children,
  ...restProps
}) => {
  const [ roles, setRoles ] = useState(null)
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    Api
      .fetchRoles()
      .then(setRoles)
      .then(Api.fetchMe)
      .then(setUser)
  }, [])

  return user && hasRight(user.role, role, roles)
    ? children
    : FallbackComponent
      ? <FallbackComponent {...restProps} />
      : null
}
