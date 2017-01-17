/* @flow */
'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router'

import Credits from '../components/Credits'
import ImageExample from '../components/ImageExample'


type Props = {
  // props
}

type State = {
  // state
}


class NoMatch extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const NoMatch = (this: any)
    // NoMatch.onEvent = this.onEvent.bind(this)
  }

  /* Component Lifecycle */

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
      <div style={{ padding: '1rem' }}>
        <h1>404: Whups, how did you get here ?!</h1>

        <ImageExample />

        <p><Link to="/">Go back</Link></p>

        <Credits />
      </div>
    )
  }


  /// Event Handlers
  // ...
}

export default NoMatch
