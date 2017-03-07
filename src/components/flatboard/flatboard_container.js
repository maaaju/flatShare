// @flow
import React, { Component } from 'react'
import axios from 'axios'

import setUsers from '../../actions'
import FlatBoard from './flatboard'

export default class FlatBoardContainer extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
    }
  }
  state: {
    user: Object,
  }

  componentDidMount() {
    this.loadUserFromServer()
  }

  loadUserFromServer() {
    axios.get('http://localhost:3001/api/flatboard')
    .then((res) => {
      console.log('action')
      setUsers(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }


  render() {
    return (<FlatBoard />)
  }
}
