/* @flow */
'use strict'

import React, { Component } from 'react'
import classnames from 'classnames'


type Props = {
  className?: string,
  error?: string,
  placeholder?: string,
  maxLength?: number,
  type?: string,
  value: string | number,
  onChange?: (event: Object) => void,
  onSubmit?: () => void,
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

    const Input = (this: any)
    Input.onKeyPress = this.onKeyPress.bind(this)
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
    const {
      className, error, placeholder, maxLength, type, value, onChange,
    } = this.props

    const inputClasses = classnames([
      'Input', className,
    ])

    return (
      <div className={inputClasses}>
        <input
          className={className}
          maxLength={maxLength}
          placeholder={placeholder}
          type={type || 'text'}
          value={value}
          onChange={onChange}
          onTouchStart={() => true}
          onKeyPress={this.onKeyPress}
        />
        { error ? <p className="error">{error}</p> : null }
      </div>
    )
  }


  /// Event Handlers

  onKeyPress(event: Object): void {
    const onSubmit = this.props.onSubmit

    if ( onSubmit && event.key === 'Enter' ) {
      onSubmit()
    }
  }

  // ...
}

export default Input
