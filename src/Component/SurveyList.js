import React, { useState, useEffect } from 'react'
import { ErrorMessage } from './Partial/ErrorMessage'
import { Loader } from './Partial/Loader'
import { Link } from 'react-router-dom'
import './SurveyList.css'

export const SurveyList = () => {
  const [ surveyList, setSurveyList ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    if (error) {
      return
    }

    setLoading(true)
    fetch('/surveys.json')
      .then(response => response.json())
      .then(setSurveyList)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [error])

  return (
    <>
      {loading && <Loader />}
      {!loading && error && (
        <ErrorMessage
          onClick={() => setError(null)}
        >
          {error.message}
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
