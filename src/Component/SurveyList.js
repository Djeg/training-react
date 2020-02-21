import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as SurveyListState from '../State/SurveyList'
import { ErrorMessage } from './Partial/ErrorMessage'
import { Loader } from './Partial/Loader'
import { Link } from 'react-router-dom'
import './SurveyList.css'

export const SurveyList = () => {
  const surveyList = useSelector(state => state.surveyList.data)
  const loading = useSelector(state => state.surveyList.loading)
  const error = useSelector(state => state.surveyList.error)
  const dispatch = useDispatch()

  useEffect(
    () => { dispatch(SurveyListState.fetch()) },
    [ dispatch ]
  )

  return (
    <>
      {loading && <Loader />}
      {!loading && error && (
        <ErrorMessage
          onClick={() => dispatch(SurveyListState.fetch())}
        >
          {error}
        </ErrorMessage>
      )}
      {!loading && !error && (
        <div className="SurveyList">
          {surveyList.map(survey =>
            <Link to={`/survey/${survey.id}`} key={`survey-thumbnail-${survey.id}`}>
              <div className="card">
                <p className="header">
                  {survey.title}
                </p>
                <div className="footer">
                  <p>By {survey.author.firstname} {survey.author.lastname}</p>
                  <p>Created at {new Date(survey.createdAt).toDateString()}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      )}
    </>
  )
}
