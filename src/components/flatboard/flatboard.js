import { React, Component, PropTypes } from 'react'

class FlatBoard extends Component {
  constructor() {
    super()
    this.state = {
      placeholder: 'lollolll',
    }
  }
  render() {
    const { comments } = this.props
    return (
      <div>{comments}</div>
    )
  }
}

FlatBoard.propTypes = {
  comments: PropTypes.string,
}
