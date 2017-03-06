import React, { Component } from 'react'
import FlatBoard from './flatboard'

class FlatBoardContainer extends Component {
  constructor() {
    super()
    this.state = {
      placeholder: 'lol',
    }
  }

  render() {
    return <FlatBoard comments={this.state.placeholder} />
  }
}

export default FlatBoardContainer
