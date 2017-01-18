/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, RouterContext } from 'react-router'
import { trim } from 'lodash'
import moment from 'moment'

import { newMessage } from '../../actions/messages'

import type { Message as MessageType } from '../../reducers/messages'

import HeaderBar from '../../components/HeaderBar'
import Message from '../../components/Message'
import Symbol from '../../components/UI/Symbol'
import Input from '../../components/UI/Input'


type Props = {
  currentUser: string,
  messages: Array<MessageType>,
  router: Router,
}

type State = {
  newMessage: string,
}


class Chat extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    this.state = {
      newMessage: '',
    }

    const Chat = (this: any)
    Chat.onSendMessage = this.onSendMessage.bind(this)
  }

  /* Component Lifecycle */

  /// Mounting
  componentWillMount() {
    const { currentUser, router } = this.props

    if ( currentUser === '' ) {
      router.push('/')
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
    const newMessage = this.state.newMessage

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
              const showDetails = ! prevMessage
                || prevMessage.name !== message.name

              return (
                <Message
                  data={message}
                  own={isOwnMessage}
                  showDetails={showDetails}
                  key={index}
                />
              )
            })
          }
          <div className="timeline"></div>
        </div>

        <div className="new-message">
          <Input
            className="full-width"
            placeholder="what do you want to say ?"
            maxLength={100}
            value={newMessage}
            onChange={(event: Object) => {
              this.setState({
                newMessage: trim(event.target.value),
              })
            }}
            onSubmit={this.onSendMessage}
          />
        </div>
      </div>
    )
  }


  /// Event Handlers

  onSendMessage() {
    const { currentUser, dispatch } = this.props

    const message = {
      id: String(Math.random(0,1)*1000),
      name: currentUser,
      text: this.state.newMessage,
      createdAt: moment.unix(),
    }

    dispatch( newMessage(message))
  }

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
