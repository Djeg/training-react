import React, { useState, useEffect } from 'react'
import { ErrorMessage } from './Partial/ErrorMessage'
import { Loader } from './Partial/Loader'
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
      .then(surveys => setSurveyList(surveys))
      .catch(e => setError(e))
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
            <div key={`survey-thumbnail-${survey.id}`} className="card">
              <p className="header">
                {survey.title}
              </p>
              <div className="footer">
                <p>By {survey.author.firstname} {survey.author.lastname}</p>
                <p>Created at {new Date(survey.createdAt).toDateString()}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
