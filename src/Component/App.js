import React from 'react'
import './App.css'
import { SurveyList } from './SurveyList'
import { Survey } from './Survey'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AuthProvider } from './Security/AuthProvider'
import * as State from '../State'

export const App = ({ name = "Stranger" }) =>
  <BrowserRouter>
    <Provider store={State.createStore()}>
      <AuthProvider>
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
      </AuthProvider>
    </Provider>
  </BrowserRouter>
