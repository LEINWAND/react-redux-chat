/* @flow */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore'

import App from './containers/App'
import Chat from './containers/Chat'
import Welcome from './containers/Welcome'
import NoMatch from './containers/NoMatch'


const store = configureStore()

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const AppRouter = () => {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
		<Route path="chat" component={Chat} />
      </Route>
      <Route path="*" component={NoMatch} />
    </Router>
  )
}


// TODO: document this
if (module.hot) {
  (module.hot: any).accept()
}


render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.querySelector('#leinwand')
)
