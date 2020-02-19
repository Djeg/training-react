import React from 'react'
import './App.css'
import surveys from '../surveys.json'
import { SurveyList } from './SurveyList'

export const App = ({ name = "Stranger" }) =>
  <div className="App">
    <header></header>
    <div>
      <div className="content">
        <SurveyList surveys={surveys} />
      </div>
    </div>
    <footer></footer>
  </div>
