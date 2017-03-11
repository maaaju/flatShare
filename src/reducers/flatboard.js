// @flow

const initialState = {
  cards: [],
  user: {},
}

export default function reducer(state: Object = initialState, action: Object = {}) {
  switch (action.type) {
    case 'SET_USER':
      console.log('user')
      return {
        ...state,
        user: action.user,
      }
    case 'SET_CARDS':
      return {
        ...state,
        cards: action.cards,
      }
    default:
      return state
  }
}
