/* @flow */
'use strict'

import React, { Component } from 'react'


type Props = {
  // props
}

type State = {
  // state
}


class Credits extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const Credits = (this: any)
    // Credits.onEvent = this.onEvent.bind(this)
  }

  /// Mounting
  // componentWillMount() {}
  // componentDidMount() {}
  // componentWillUnmount() {}

  /// Updating
  // componentWillReceiveProps(nextProps: Props) {}
  // shouldComponentUpdate(nextProps: Props, nextState: State) {}
  // componentWillUpdate(nextProps: Props, nextState: State) {}
  // componentDidUpdate(prevProps: Props, prevState: State) {}


  render() {
    return (
      <div className="Credits">
        <span>Modestly presented by <a href="https://github.com/leinwand" target="_blank">LEINWAND</a></span>
      </div>
    )
  }


  /// Event Handlers
  // ...
}

export default Credits
