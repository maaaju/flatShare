import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import flatboard from './flatboard'

const appReducer = combineReducers({
  routing: routerReducer,
  flatboard,
})

export default appReducer
