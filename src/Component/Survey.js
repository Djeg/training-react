import { useParams } from 'react-router-dom'
import { ErrorMessage } from './Partial/ErrorMessage'
import { Loader } from './Partial/Loader'
import { useSelector, useDispatch } from 'react-redux'
import * as SurveyState from '../State/Survey'
import React, { useState, useEffect } from 'react'

export const Survey = () => {
  const { id } = useParams()
  const title = useSelector(state => state.survey.title)
  const answers = useSelector(state => state.survey.answers)
  const formData = useSelector(state => state.survey.formData)
  const loading = useSelector(state => state.survey.loading)
  const errors = useSelector(state => state.survey.errors)
  const dispatch = useDispatch()

  useEffect(() => {
    if (errors.length) return

    dispatch(SurveyState.fetch())
    fetch('/surveys.json') // Promise<Response>
      .then(response => response.json()) // Promise<Array<Survey>>
      .then(surveys => surveys.find(s => s.id === Number(id))) // Promise<Survey>
      .then(survey => survey || Promise.reject(Error('No survey found'))) // Promise<Survey>
      .then(survey => SurveyState.received(survey)) // Promise<Action>
      .then(action => dispatch(action)) // Promise<null>
      .catch(error => dispatch(SurveyState.fail(error)))
  }, [ errors, id, dispatch ])

  return (
    <>
      {errors.length && errors.map((e, index) => (
        <ErrorMessage onClick={() => dispatch(SurveyState.fetch())}>
          {e.message}
        </ErrorMessage>
      ))}
      {loading && (
        <Loader />
      )}
      {!loading && !errors.length && (
        <form onSubmit={e => {
          e.preventDefault()

          dispatch(SurveyState.submit())
        }}>
          <h1>{title}</h1>
          <p>Choose your answers:</p>
          {answers.map((answer, index) => 
            <div key={`survey-${id}-answer-${answer}`}>
            <input type="radio" name="answer" id={`answer-${answer}`} value={index} onChange={e => {
              dispatch(SurveyState.changeFormData({
                name: 'answer',
                value: index,
              }))
            }} />
              <label htmlFor={`answer-${answer}`}>{answer}</label>
            </div>
          )}
          <div>
          <input name="username" type="text" placeholder="Please, specify your name" onChange={e => {
            dispatch(SurveyState.changeFormData({
              name: 'username',
              value: e.target.value,
            }))
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
