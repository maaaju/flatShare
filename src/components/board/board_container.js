// @flow
import axios from 'axios'
import React, { Component } from 'react'
import Board from './board'

// TODO: Will I be needing this? :thinking_face:
class BoardContainer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return <Board />
  }
}

export default BoardContainer
