/* @flow */
'use strict'

import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { Router, RouterContext } from 'react-router'

import { changeUser } from '../../actions/main'

import type { Dispatch } from '../../actions/types'

import Input from '../../components/UI/Input'
import Symbol from '../../components/UI/Symbol'


type Props = {
  dispatch: Dispatch,
  router: Router,
  user: string,
}

type State = {
  error: string,
  user: string,
}


class Welcome extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    this.state = {
      error: '',
      user: props.user,
    }

    const Welcome = (this: any)
    Welcome.onEnterChat = this.onEnterChat.bind(this)
  }

  /* Component Lifecycle */

  /// Mounting
  // componentWillMount() {}
  componentDidMount() {
    const Welcome = (this: any)
    const NameInput = findDOMNode(Welcome.NameInput)
    NameInput.querySelector('input').focus()
  }
  // componentWillUnmount() {}

  /// Updating
  // componentWillReceiveProps(nextProps: Props) {}
  // shouldComponentUpdate(nextProps: Props, nextState: State) {}
  // componentWillUpdate(nextProps: Props, nextState: State) {}
  // componentDidUpdate(prevProps: Props, prevState: State) {}


  render() {
    const { error, user } = this.state

    return (
      <div id="Welcome" className="column-around view">
        <h1>Welcome!</h1>
        <Input
          ref={(ref) => (this: any).NameInput = ref}
          error={error}
          maxLength={20}
          placeholder="Enter your name"
          value={user}
          onChange={(event: Object) => this.setState({ user: event.target.value })}
          onSubmit={this.onEnterChat}
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
    const user = this.state.user

    if (user) {
      const { dispatch, router } = this.props
      dispatch( changeUser(user))
      router.push('/chat')
    } else {
      this.setState({ error: 'Please enter your name.' })
    }
  }
}

const mapStateToProps = (state: Object, routerContext: RouterContext) => {
  return {
    user: state.main.user,
    router: routerContext.router,
  }
}

export default connect(
  mapStateToProps
)(Welcome)
