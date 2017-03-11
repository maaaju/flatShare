// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import Actions from '../../actions'
import FlatBoard from './flatboard'

class FlatBoardContainer extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
    }
  }
  state: {
    user: Object,
  }

  // TODO: We need to do this earlier on in the process I think
  loadUserFromServer() {
    const { dispatch } = this.props
    axios.get('http://localhost:3001/api/flatboard')
    .then((res) => {
      Actions.setUsers(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  loadCardFromServer() {
    axios.get('http://localhost:3001/api/flatboard/cards')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }


  render() {
    const { flatboard } = this.props
    this.loadCardFromServer()
    this.loadUserFromServer()

    return (<FlatBoard user={flatboard.user} cards={flatboard.cards} />)
  }
}

const mapStateToProps = state => (
  {
    flatboard: state.flatboard,
  }
)
export default connect(mapStateToProps)(FlatBoardContainer)
