import { useSelector } from 'react-redux'
import { useActions } from '../../Util/Hook'
import * as Auth from '../../State/Auth'

export const AuthProvider = ({
  children,
}) => {
  const roles = useSelector(Auth.select.roleHierarchy)

  useActions([
    Auth.fetchRoles(),
    Auth.fetchUser(),
  ])

  return roles
    ? children
    : null
}
