import React from 'react'
import { Router, Route } from 'react-router'

import App from './components/app'
import NotFound from './components/notfound'
import FlatBoardContainer from './components/flatboard/flatboard_container'

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/flatboard" component={FlatBoardContainer} />
    <Route path="*" component={NotFound} />
  </Router>
)

export default Routes
