import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const alertOptions = {
  position: positions.BOTTOM_RIGHT,
  timeout: 7000,
  offset: '30px',
  transition: transitions.FASE,
}

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
)
