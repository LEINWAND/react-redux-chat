/* @flow */
'use strict'

import React, { Component } from 'react'
import classnames from 'classnames'

import Symbol from '../UI/Symbol'


type Props = {
  data: Object,
}

type State = {
  // state
}


class Message extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const Message = (this: any)
    // Message.onEvent = this.onEvent.bind(this)
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
    const { name, text } = this.props.data

    const isOwnMessage = true
    const circleClasses = classnames([
      'circle',
      { 'bg-primary': isOwnMessage },
      { 'bg-secondary': ! isOwnMessage },
    ])
    const textClasses = classnames([
      'text',
      { 'bg-primary': isOwnMessage },
      { 'bg-secondary': ! isOwnMessage },
    ])

    return (
      <div className="Message column">
        <div className="details row-start">
          <div className={circleClasses}></div>
          <div className="name">{name}</div>
        </div>
        <div className={textClasses}>{text}</div>
      </div>
    )
  }


  /// Event Handlers
  // ...
}

export default Message
