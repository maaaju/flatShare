import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import appReducer from './reducers'

import Routes from './routes'

const store = createStore(appReducer)

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root'),
)

// add flow to repo.
