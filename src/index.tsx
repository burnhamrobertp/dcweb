import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import './styles/dcweb.css'
import rootReducer from './state/reducers'
import middleware from './state/middleware'
import App from './App'

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    ...middleware
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
