import React from 'react'
import ReactDOM from 'react-dom'

import {createStore} from './redux'
import {Provider} from './react-redux'

import App from './main/app'
import reducers from './main/reducers'
ReactDOM.render(<App />, document.getElementById('app'))