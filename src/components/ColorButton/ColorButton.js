/* @flow */
'use strict'

import React, { Component } from 'react'


type Props = {
  color: string,
  onClick: () => void,
}

type State = {
  // state
}


class ColorButton extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const ColorButton = (this: any)
    // ColorButton.onEvent = this.onEvent.bind(this)
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
    const { color, onClick } = this.props

    return (
      <button
        className="ColorButton"
        style={{ background: color }}
        onClick={onClick}
      >Change color</button>
    )
  }


  /// Event Handlers
  // ...
}

export default ColorButton
