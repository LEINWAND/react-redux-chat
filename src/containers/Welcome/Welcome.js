/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, RouterContext } from 'react-router'

import { changeName } from '../../actions/main'

import type { Dispatch } from '../../actions/types'

import Input from '../../components/UI/Input'
import Symbol from '../../components/UI/Symbol'


type Props = {
  dispatch: Dispatch,
  name: string,
  router: Router,
}

type State = {
  error: ?string,
  name: string,
}


class Welcome extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    this.state = {
      error: null,
      name: props.name,
    }

    const Welcome = (this: any)
    Welcome.onEnterChat = this.onEnterChat.bind(this)
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
    const { error, name } = this.state

    return (
      <div id="Welcome" className="column-around view">
        <h1>Welcome!</h1>
        <Input
          error={error}
          maxLength={20}
          placeholder="Enter your name"
          value={name}
          onChange={(event: Object) => this.setState({ name: event.target.value })}
        />
        <Symbol
          className="ActionButton"
          icon="ion-android-done"
          onClick={this.onEnterChat}
        />
      </div>
    )
  }


  /// Event Handlers

  onEnterChat(event: Object): void {
    const name = this.state.name

    if (name) {
      const { dispatch, router } = this.props
      dispatch( changeName(name) )
      router.push('/chat')
    } else {
      this.setState({ error: 'Bitte ausfüllen.' })
    }
  }
}

const mapStateToProps = (state: Object, routerContext: RouterContext) => {
  return {
    name: state.main.name,
    router: routerContext.router,
  }
}

export default connect(
  mapStateToProps
)(Welcome)
