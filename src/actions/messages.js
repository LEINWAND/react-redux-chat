/* @flow */
'use strict'

import type { Action } from './types'

import type { Message } from '../reducers/messages'


export function fetchMessages(messages: Array<Message>): Action {
  return {
    type: 'FETCH_MESSAGES',
    payload: messages
  }
}

export function newMessage(data: Message): Action {
  return {
    type: 'NEW_MESSAGE',
    payload: data
  }
}
