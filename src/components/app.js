// @flow
import React, { Component } from 'react'
import LoginContainer from './login/login_container'
import '../css/app.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginContainer apiURL={'http://localhost:3001/api/login'}/>
      </div>
    )
  }
}

export default App
