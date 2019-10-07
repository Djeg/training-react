import * as Surveys from '../State/Surveys'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default () => {
  const surveys = useSelector(state => state.surveys.data)
  const loading = useSelector(state => state.surveys.loading)
  const errored = useSelector(state => state.surveys.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Surveys.load())
  }, [])

  return (
    <>
      { errored
        ? <p>Oups, we can't find a list of surveys. Please retry in a bit.</p>
        : loading
          ? <p>Loading</p>
          : <ul>
            { surveys.map(survey => (
              <li>
                { survey.name }, created By
                { survey.author.firstname }
                { survey.author.lastname } at
                { survey.createdAt }
              </li>
            )) }
          </ul>
      }
    </>
  )
}
