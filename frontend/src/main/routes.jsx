import React from 'react'
import { Switch, Route, Redirect, HashRouter, hashHistory } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'


export default props => (
    <HashRouter history={hashHistory}>
        <Switch>
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/todos' />
        </Switch>
    </HashRouter>
)