/* @flow */
'use strict'

import React, { Component } from 'react'
import classnames from 'classnames'


type Props = {
  data: Object,
  own: boolean,
  showDetails: boolean,
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
    const { own, showDetails } = this.props

    const circleClasses = classnames([
      'circle',
      { 'border-primary': !! own },
      { 'border-lightgray': ! own },
    ])
    const textClasses = classnames([
      'text',
      { 'bg-primary color-white': !! own },
      { 'bg-lightgray': ! own },
    ])

    return (
      <div className="Message column">
        { showDetails === true
          ? <div className="details row-start">
              <div className={circleClasses}></div>
              <div className="name">{name}</div>
            </div>
          : null
        }
        <div className={textClasses}>{text}</div>
      </div>
    )
  }


  /// Event Handlers
  // ...
}

export default Message
