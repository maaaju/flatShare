// @flow
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class FlatBoard extends Component {
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
    const { comments } = this.props
    console.log(comments)
    return (
      <div>Hi</div>
    )
  }
}

FlatBoard.propTypes = {
  comments: PropTypes.string,
}


const mapStateToProps = state => (
  {
    user: state.flatboard,
  }
)
export default connect(mapStateToProps)(FlatBoard)
