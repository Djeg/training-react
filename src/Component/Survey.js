import { useParams } from 'react-router-dom'
import { ErrorMessage } from './Partial/ErrorMessage'
import { Loader } from './Partial/Loader'
import { useSelector, useDispatch } from 'react-redux'
import * as SurveyState from '../State/Survey'
import * as Security from './Security'
import * as Validator from '../Effect/Form/Validator'
import { useActions } from '../Util/Hook'
import React from 'react'

export const Survey = () => {
  const { id } = useParams()
  const title = useSelector(SurveyState.select.title)
  const answers = useSelector(SurveyState.select.answers)
  const loading = useSelector(SurveyState.select.loading)
  const errors = useSelector(SurveyState.select.errors)
  const formData = useSelector(SurveyState.select.formData)
  const dispatch = useDispatch()
  const retry = id => () => dispatch(SurveyState.fetch(id))

  useActions([ SurveyState.fetch(id) ], [ id ])

  return (
    <>
      {errors.length && errors.map((e, index) => (
        <ErrorMessage onClick={retry(id)}>
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
            <input
              name="username"
              type="text"
              placeholder="Please, specify your name"
              onChange={e => {
                dispatch(SurveyState.changeFormData({
                  name: 'username',
                  value: e.target.value,
                  validators: [
                    Validator.noBlank,
                    Validator.maxLength(12),
                  ]
                }))
              }}
            />
            {!formData.username.errors.length
              ? null 
              : formData.username.errors.map(
                (err, index) => <p key={`field-error-username-${index}`}>{err}</p>
              )
            }
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      )}
    </>
  )
}
