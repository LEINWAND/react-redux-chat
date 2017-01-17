/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, RouterContext } from 'react-router'

import HeaderBar from '../components/HeaderBar'


type Props = {
  router: Router,
}

type State = {
  // state
}


class Chat extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const Chat = (this: any)
    // Chat.onEvent = this.onEvent.bind(this)
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
      <div id="Chat">
        <HeaderBar
          title="chat"
          leftItem={{
            icon: 'ion-filing',
            onClick: () => this.props.router.goBack(),
          }}
        />
      </div>
    )
  }


  /// Event Handlers
  // ...
}

const mapStateToProps = (state: Object, routerContext: RouterContext) => {
  // console.log('Chat mapStateToProps:')
  // console.log('  state: ', state)
  // console.log('  routerContext: ', routerContext)

  return {
    // main: state.main,
    router: routerContext.router,
  }
}

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Chat)
