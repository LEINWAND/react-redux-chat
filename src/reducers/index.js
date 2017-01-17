/* @flow */
'use strict'

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import mainReducer from './main'
import messagesReducer from './messages'


export default combineReducers({
  main: mainReducer,
  messages: messagesReducer,
  routing: routerReducer,
})
