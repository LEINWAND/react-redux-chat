/* @flow */
'use strict'

import React, { Component } from 'react'


type Props = {
  error?: string,
  placeholder?: string,
  maxLength?: number,
  type?: string,
  value: string | number,
  onChange?: (event: Object) => void,
}

type State = {
  // state
}


class Input extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const Input = (this: any)
    // Input.onEvent = this.onEvent.bind(this)
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
    const { error, placeholder, maxLength, type, value, onChange } = this.props

    return (
      <div className="Input">
        <input
          maxLength={maxLength}
          placeholder={placeholder}
          type={type || 'text'}
          value={value}
          onChange={onChange}
          onTouchStart={() => true}
        />
        { error ? <p className="error">{error}</p> : null }
      </div>
    )
  }


  /// Event Handlers
  // ...
}

export default Input
