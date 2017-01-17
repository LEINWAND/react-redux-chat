/* @flow */
'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, RouterContext } from 'react-router'
import moment from 'moment'

import HeaderBar from '../components/HeaderBar'
import Symbol from '../components/UI/Symbol'


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
    const messages = [{
      id: 0,
      name: 'iosif',
      text: 'hellow !',
      createdAt: moment.unix(),
    }, {
      id: 1,
      name: 'vali',
      text: 'heeey !',
      createdAt: moment.unix() + 86400,
    }, {
      id: 2,
      name: 'iosif',
      text: 'how are you',
      createdAt: moment.unix() + 86400*2,
    }, {
      id: 3,
      name: 'vali',
      text: 'i\'m okay :)',
      createdAt: moment.unix() + 86400*3,
    }, {
      id: 4,
      name: 'vali',
      text: 'nice to see you !',
      createdAt: moment.unix() + 86400*4,
    }]


    return (
      <div id="Chat">
        <HeaderBar
          title="chat"
          leftItem={{
            icon: 'ion-filing',
            onClick: () => this.props.router.goBack(),
          }}
        />

        <div className="content" style={{
          marginTop: 44, padding: '1rem',
        }}>
          { messages.map((message, index) => {
              return (
                <div className="message column-around" key={index}>
                  <div className="user row-center">
                    <Symbol icon="ion-record" />
                    <div className="name">{message.name}</div>
                  </div>
                  <div className="text">{message.text}</div>
                </div>
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
    // main: state.main,
    router: routerContext.router,
  }
}

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Chat)
