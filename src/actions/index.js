// @flow
const SET_USER = 'SET_USER'

const Actions = {

  setUsers: user => (dispatch) => {
    dispatch({
      type: SET_USER,
      user,
    })
  },

  setCards: cards => (dispatch) => {
    dispatch({
      type: 'SET_CARDS',
      cards,
    })
  },
}

export default Actions
