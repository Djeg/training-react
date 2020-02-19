import React from 'react'
import './App.css'
import { SurveyList } from './SurveyList'

export const App = ({ name = "Stranger" }) =>
  <div className="App">
    <header></header>
    <div>
      <div className="content">
        <SurveyList />
      </div>
    </div>
    <footer></footer>
  </div>
