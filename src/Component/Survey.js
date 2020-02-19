import { useParams } from 'react-router-dom'
import { ErrorMessage } from './Partial/ErrorMessage'
import { Loader } from './Partial/Loader'
import React, { useState, useEffect } from 'react'

export const Survey = () => {
  const { id } = useParams()
  const [ survey, setSurvey ] = useState({})
  const [ error, setError ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const [ answer, setAnswer ] = useState(null)
  const [ username, setUsername ] = useState(null)

  useEffect(() => {
    if (error) return

    setLoading(true)
    fetch('/surveys.json')
      .then(response => response.json())
      .then(surveys => surveys.find(s => s.id === Number(id)))
      .then(survey => survey || Promise.reject(Error('No survey found')))
      .then(setSurvey)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [ error, id ])

  return (
    <>
      {error && (
        <ErrorMessage onClick={() => setError(null)}>
          {error.message}
        </ErrorMessage>
      )}
      {loading && (
        <Loader />
      )}
      {!loading && !error && (
        <form onSubmit={e => {
          e.preventDefault()

          console.warn(answer, username)
        }}>
          <h1>{survey.title}</h1>
          <p>Choose your answers:</p>
          {survey?.answers?.map((answer, index) => 
            <div key={`survey-${survey.id}-answer-${answer}`}>
            <input type="radio" name="answer" id={`answer-${answer}`} value={index} onChange={e => {
              setAnswer(index)
            }} />
              <label htmlFor={`answer-${answer}`}>{answer}</label>
            </div>
          )}
          <div>
          <input name="username" type="text" placeholder="Please, specify your name" onChange={e => {
            setUsername(e.target.value)
          }} />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      )}
    </>
  )
}
