import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducer from './reducers'

const store = createStore(appReducer)

import Routes from './routes'

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root'),
)

// add flow to repo.
