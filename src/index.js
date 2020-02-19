import React from 'react'
import { render } from 'react-dom'
import { App } from './Component/App'
import './index.css'

// We ask the DOM to retrieve the #root element
const rootElement = document.getElementById('root')

// We ensure the rootElement exists
if (!rootElement) {
  throw Error('You must create a #roor element')
}

// start a react application
render(<App name="John Doe" />, rootElement)
