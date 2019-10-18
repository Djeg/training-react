import React from 'react'
import { render } from 'react-dom'
import { App } from './Component/App'
import { store } from './State'
import { Provider } from 'react-redux'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
