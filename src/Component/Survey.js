import { useParams } from 'react-router-dom'
import { ErrorMessage } from './Partial/ErrorMessage'
import { Loader } from './Partial/Loader'
import { useSelector, useDispatch } from 'react-redux'
import * as SurveyState from '../State/Survey'
import * as Security from './Security'
import { useActions } from '../Util/Hook'
import React from 'react'

export const Survey = () => {
  const { id } = useParams()
  const title = useSelector(state => state.survey.title)
  const answers = useSelector(state => state.survey.answers)
  const loading = useSelector(state => state.survey.loading)
  const errors = useSelector(state => state.survey.errors)
  const dispatch = useDispatch()

  useActions([ SurveyState.fetch(id) ], [ id ])

  return (
    <>
      {errors.length && errors.map((e, index) => (
        <ErrorMessage onClick={() => dispatch(SurveyState.fetch(id))}>
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
          <Security.OnlyFor
            role="ADMIN"
            FallbackComponent={() =>
              <p>Choose your answer:</p>
            }
          >
            <p>Choose your answers master of the world:</p>
          </Security.OnlyFor>
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
