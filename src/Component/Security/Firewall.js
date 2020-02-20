import React, { useEffect, useState } from 'react'
import * as Api from '../../Util/Api'

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

export const Firewall = ({
  role = "USER",
  children,
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
    : <h1>YOU SHALL NOT PASS</h1>
}
