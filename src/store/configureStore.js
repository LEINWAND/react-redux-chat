/* @flow */
'use strict'

import { applyMiddleware, compose, createStore } from 'redux'

import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'

import reducers from '../reducers'


const initialState: ?Object = undefined
const logger = createLogger()


export default function configureStore(state: ?Object = initialState): Object {
  const store = createStore(
    reducers,
    state,
    compose(
      applyMiddleware(thunk, promise, logger),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  // NOTE: https://github.com/reactjs/react-redux/releases/tag/v2.0.0
  // NOTE: This doesn't seem to work yet !
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    (module.hot: any).accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store
}
