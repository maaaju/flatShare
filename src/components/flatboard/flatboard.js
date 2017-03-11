// @flow
import React, { Component, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import { deepPurple200, grey50 } from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import Board from '../board/board'

export default class FlatBoard extends Component {
  constructor() {
    super()
    this.state = {
      placeholder: 'lollolll',
    }
  }
  state: {
      placeholder: string,
    }
  defaultProps: {
    comments: 'hej'
  }

  render() {
    const { flatboard } = this.props
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
        <Board />
      </div>

    )
  }
}

FlatBoard.propTypes = {
  comments: PropTypes.string,
}
