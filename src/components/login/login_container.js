// @flow
import React, { Component, PropTypes } from 'react'
import axios from 'axios'

import Login from './login'

class LoginContainer extends Component {
  constructor(props) {
    super(props)

    this.postNewLogin = this.postNewLogin.bind(this)
  }

  postNewLogin = (loginInfo: Object) => {
    axios.post(this.props.apiURL, loginInfo)
    .then((res) => {
      this.setState({ data: res })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <Login newLogin={this.postNewLogin()} />
    )
  }
}

LoginContainer.propTypes = {
  apiURL: PropTypes.string,
}

export default LoginContainer
