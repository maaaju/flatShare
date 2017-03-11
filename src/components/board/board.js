// @flow
import React, { Component } from 'react'
import Paper from 'material-ui/Paper'

const style = {
  height: 550,
  width: '100%',
  marginTop: 10,
  // textAlign: 'center',
  // display: 'inline-block',
}

class Board extends Component {

  render() {
    return <Paper style={style} zDepth={2} rounded={false} />
  }
}

export default Board
