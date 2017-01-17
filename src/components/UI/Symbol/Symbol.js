/* @flow */
'use strict'

import React, { Component } from 'react'
import classnames from 'classnames'


type Props = {
  className?: string,
  icon: string,
  onClick: () => void,
}

type State = {
  // state
}


class Symbol extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const Symbol = (this: any)
    // Symbol.onEvent = this.onEvent.bind(this)
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
    const { className, icon, onClick } = this.props

    const buttonClasses = classnames([
      'Button clickable', className,
    ])
    const iconClasses = classnames([
      'icon', icon,
    ])

    return (
      <div className={buttonClasses} onClick={onClick}>
        <div className="Symbol">
          <i className={iconClasses}></i>
        </div>
      </div>
    )
  }


  /// Event Handlers
  // ...
}

export default Symbol
