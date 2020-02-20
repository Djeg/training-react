import React from 'react'
import './App.css'
import { SurveyList } from './SurveyList'
import { Survey } from './Survey'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Firewall } from './Security/Firewall'
import * as State from '../State'

export const App = ({ name = "Stranger" }) =>
  <BrowserRouter>
    <Provider store={createStore(
      State.reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
      <div className="App">
        <header></header>
        <div>
          <div className="content">
            <Switch>
              <Route path="/" component={SurveyList} exact />
              <Firewall role="USER">
                <Route path="/survey/:id" component={Survey} exact />
              </Firewall>
            </Switch>
          </div>
        </div>
        <footer></footer>
      </div>
    </Provider>
  </BrowserRouter>
