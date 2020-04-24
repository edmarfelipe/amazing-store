import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { archiveReducer } from 'pages/Archive/reducer'

import App from './App'

const store = createStore(
  combineReducers({
    archiveReducer,
  }),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
