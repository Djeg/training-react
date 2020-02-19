import React from 'react'
import './App.css'
import { SurveyList } from './SurveyList'
import { Survey } from './Survey'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export const App = ({ name = "Stranger" }) =>
  <BrowserRouter>
    <div className="App">
      <header></header>
      <div>
        <div className="content">
          <Switch>
            <Route path="/" component={SurveyList} exact />
            <Route path="/survey/:id" component={Survey} exact />
          </Switch>
        </div>
      </div>
      <footer></footer>
    </div>
  </BrowserRouter>
