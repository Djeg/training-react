import React from 'react'
import { useActions } from '../Util/Hook'
import { useSelector, useDispatch } from 'react-redux'
import * as SurveyListState from '../State/SurveyList'
import { ErrorMessage } from './Partial/ErrorMessage'
import { Loader } from './Partial/Loader'
import { Link } from 'react-router-dom'
import './SurveyList.css'

export const SurveyList = () => {
  const surveyList = useSelector(SurveyListState.select.data)
  const loading = useSelector(SurveyListState.select.loading)
  const error = useSelector(SurveyListState.select.error)
  const dispatch = useDispatch()

  useActions([ SurveyListState.fetch() ])

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
