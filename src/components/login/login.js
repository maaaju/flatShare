// @flow
import React, { Component, PropTypes } from 'react'

import AppBar from 'material-ui/AppBar'
import { deepPurple200, grey50 } from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { newLogin } = this.props
    return (
      <div>
        <header>
          <AppBar
            title="flatShare"
            style={{ backgroundColor: deepPurple200 }}
          >
            <FlatButton label="flatBoard" labelStyle={{ color: grey50, fontSize: '24px' }} style={{ lineHeight: '50px'}} />
            <FlatButton label="flatAccounting" labelStyle={{ color: grey50, fontSize: '24px' }} style={{ lineHeight: '50px'}} />
            <FlatButton label="flatCalendar" labelStyle={{ color: grey50, fontSize: '24px' }} style={{ lineHeight: '50px'}} />
            <FlatButton label="flatTasks" labelStyle={{ color: grey50, fontSize: '24px' }} style={{ lineHeight: '50px'}} />
          </AppBar>
        </header>
        <body>
          <div>
            Hej
          </div>
        </body>
        <div> hej </div>
      </div>
    )
  }
}

Login.propTypes = {
  newLogin: PropTypes.func
}

export default Login
