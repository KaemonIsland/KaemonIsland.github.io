import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App'
import { GlobalStyles, ThemeProvider } from 'warlock-ui'

const root = document.getElementById('root')

// prettier-ignore
ReactDOM.render(
  <Router>
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </Router>,
  root,
)
