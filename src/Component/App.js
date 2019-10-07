import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../State'
import ListSurvey from './ListSurvey'

export default () => {
  return (
    <Provider store={createStore()}>
      <ListSurvey />
    </Provider>
  )
}
