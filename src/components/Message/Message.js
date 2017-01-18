/* @flow */
'use strict'

import React, { Component } from 'react'
import moment from 'moment'
import classnames from 'classnames'

import type { Message as MessageType } from '../../reducers/messages'


type Props = {
  data: MessageType,
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
    const { createdAt, name, text } = this.props.data
    const { own, showDetails } = this.props

    const date = moment(createdAt).format('DD.MM.YYYY HH:MM')

    const circleClasses = classnames([
      'circle',
      { 'border-primary': !! own },
      { 'border-secondary': ! own },
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
              <div className="info row-between">
                {name}
                <div className="timestamp">{date}</div>
              </div>
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
