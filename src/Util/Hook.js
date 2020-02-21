import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

export const useActions = (actions, observable = []) => {
  const dispatch = useDispatch()

  useMemo(() => actions.map(dispatch), [
    dispatch,
    ...observable
  ])
}
