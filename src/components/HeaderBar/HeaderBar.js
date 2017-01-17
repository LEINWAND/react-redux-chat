/* @flow */
'use strict'

import React, { Component } from 'react'
import classnames from 'classnames'

import Symbol from '../UI/Symbol'


type Props = {
  title: string,
  leftItem: Object,
  rightItem: Object,
}

type State = {
  // state
}


class HeaderBar extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const HeaderBar = (this: any)
    // HeaderBar.onEvent = this.onEvent.bind(this)
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
    const { leftItem, rightItem, title } = this.props

    const classes = classnames([
      'HeaderBar',
      { 'row-center': ! leftItem && ! rightItem },
      { 'row-between': leftItem || rightItem },
    ])


    return (
      <div className={classes}>
        <div className="leftItem">
          { leftItem
            ? <Symbol
                icon={leftItem.icon}
                onClick={leftItem.onClick}
              />
            : null
          }
        </div>

        <h1>{title}</h1>

        <div className="rightItem">
          { rightItem
            ? <Symbol
                icon={rightItem.icon}
                onClick={leftItem.onClick}
              />
            : null
          }
        </div>
      </div>
    )
  }


  /// Event Handlers
  // ...
}

export default HeaderBar
