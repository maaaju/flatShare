// @flow
import React, { Component, PropTypes } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { newLogin } = this.props
    return (
      <div> hej </div>
    )
  }
}

Login.propTypes = {
  newLogin: PropTypes.func
}

export default Login
