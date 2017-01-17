/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, RouterContext } from 'react-router'

// import { exampleAction } from '../actions/main'

import type { Dispatch } from '../actions/types'


type Props = {
  dispatch: Dispatch,
  id: number,
}

type State = {
  // state
}


class Welcome extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    const Welcome = (this: any)
    Welcome.onExampleAction = this.onExampleAction.bind(this)
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
      <div id="Welcome" className="view">
        <h1>Welcome !</h1>
      </div>
    )
  }


  /// Event Handlers

  onExampleAction() {
    const { dispatch, id } = this.props

    const newId = id + 1

    dispatch( exampleAction(newId) )
  }
}

const mapStateToProps = (state: Object, router: RouterContext) => {
  return {
    id: state.main.id,
  }
}

export default connect(
  mapStateToProps
)(Welcome)
