/* @flow */

require('../stylesheets/utils/helpers.scss')

import React, { Component } from 'react'


type Props = {
  children: Object,
}

type State = {
  // state
}


class App extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const App = (this: any)
    // App.onEvent = this.onEvent.bind(this)
  }

  render() {
    return this.props.children
  }
}

export default App
