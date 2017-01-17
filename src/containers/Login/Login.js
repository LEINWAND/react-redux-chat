/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, RouterContext } from 'react-router'

import { colorAction } from '../../actions/main'

import type { Dispatch } from '../../actions/types'

import ColorButton from '../../components/ColorButton'
import Credits from '../../components/Credits'


type Props = {
  color: string,
  dispatch: Dispatch,
}

type State = {
  // state
}


class Login extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    const Login = (this: any)
    Login.onColorAction = this.onColorAction.bind(this)
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
      <div id="Login">
        <h1>Login</h1>

        <p className="link"><Link to="/">🏡</Link></p>

        <p>Member area</p>

        <ColorButton
          color={this.props.color}
          onClick={this.onColorAction}
        />

        <Credits />
      </div>
    )
  }


  /// Event Handlers

  onColorAction() {
    const { color, dispatch } = this.props

    const newColor = color === '#0f0' ? '#f00' : '#0f0'

    dispatch( colorAction(newColor) )
  }
}

const mapStateToProps = (state: Object, router: RouterContext) => {
  return {
    color: state.main.color,
  }
}

export default connect(
  mapStateToProps
)(Login)
