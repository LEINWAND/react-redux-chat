/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, RouterContext } from 'react-router'

import { exampleAction } from '../actions/main'

import type { Dispatch } from '../actions/types'

import Credits from '../components/Credits'
import ExampleButton from '../components/ExampleButton'


type Props = {
  dispatch: Dispatch,
  id: number,
}

type State = {
  // state
}


class Home extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    const Home = (this: any)
    Home.onExampleAction = this.onExampleAction.bind(this)
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
        <h1>Welcome to your awesome react-redux app !</h1>

        <ExampleButton
          id={this.props.id}
          onClick={this.onExampleAction}
        />

        <p><Link to="login">Login</Link></p>
        <p><Link to="/asdf">404 Route</Link></p>

        <Credits />
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
)(Home)
