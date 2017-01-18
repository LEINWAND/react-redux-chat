/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, RouterContext } from 'react-router'
import moment from 'moment'

import type { Message as MessageType } from '../../reducers/messages'

import HeaderBar from '../../components/HeaderBar'
import Message from '../../components/Message'
import Symbol from '../../components/UI/Symbol'


type Props = {
  currentUser: string,
  messages: Array<MessageType>,
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
  componentWillMount() {
    if ( this.props.currentUser === '' ) {
      this.props.router.push('/')
    }
  }
  // componentDidMount() {}
  // componentWillUnmount() {}

  /// Updating
  // componentWillReceiveProps(nextProps: Props) {}
  // shouldComponentUpdate(nextProps: Props, nextState: State) {}
  // componentWillUpdate(nextProps: Props, nextState: State) {}
  // componentDidUpdate(prevProps: Props, prevState: State) {}


  render() {
    const { currentUser, messages, router } = this.props

    return (
      <div id="Chat">
        <HeaderBar
          title="chat"
          leftItem={{
            icon: 'ion-coffee',
            onClick: () => router.goBack(),
          }}
        />

        <div className="content">
          { messages.map((message, index) => {
              const isOwnMessage = message.name == currentUser

              const prevMessage = messages[index-1]
              const prevOwnMessage = prevMessage && prevMessage.name === currentUser

              return (
                <Message
                  data={message}
                  own={isOwnMessage}
                  showDetails={true}
                  key={index}
                />
              )
            })
          }
        </div>
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
    currentUser: state.main.name,
    messages: state.messages,
    router: routerContext.router,
  }
}

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Chat)
