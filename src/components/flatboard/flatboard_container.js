// @flow
import React, { Component } from 'react'
import axios from 'axios'

import FlatBoard from './flatboard'

export default class FlatBoardContainer extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
    }
  }
  state: {
    user: string,
  }

  loadUserFromServer() {
    axios.get('http://localhost:3001/api/flatboard')
    .then((res) => {
      this.setState({ user: res.data })
    })
    .catch((err) => {
      console.log(err)
    })
  }


  render() {
    this.loadUserFromServer()
    return (<FlatBoard comments={this.state.user} />)
  }
}
