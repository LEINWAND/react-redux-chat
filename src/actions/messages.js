/* @flow */
'use strict'

import type { Action } from './types'

import type { Message } from '../reducers/messages'


export function newMessage(data: Message): Action {
  return {
    type: 'NEW_MESSAGE',
    payload: data
  }
}
