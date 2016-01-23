import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { App } from './App'
import { About } from './components/About'
import { Repo } from './components/Repo'

import styleMain from './main.scss'

render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Repo} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.getElementById('root'))
