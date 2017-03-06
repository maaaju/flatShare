import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducer from '../reducers'

const store = createStore(appReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    )
  }
}

export default App
