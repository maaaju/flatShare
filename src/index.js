import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { purple200 } from 'material-ui/styles/colors'

import appReducer from './reducers'

import Routes from './routes'

const store = createStore(appReducer)

injectTapEventPlugin()

const muiTheme = getMuiTheme({
  palette: {
    textColor: purple200,
  },
  appBar: {
    height: 70,
  },
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Routes history={browserHistory} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
)

// add flow to repo.
