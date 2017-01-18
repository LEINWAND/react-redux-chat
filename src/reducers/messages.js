/* @flow */
'use strict'

import type { Action } from '../actions/types'


export type Message = {
  id: number,
  name: string,
  text: string,
  createdAt: number,
}


const initialState: Array<Message> = []


type State = Array<Message>


export default function messagesReducer(
  state: State = initialState, action: Action
): State {
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return fetchMessages(state, action)

    case 'NEW_MESSAGE':
      return newMessage(state, action)

    default:
      return state
  }
}


function fetchMessages(state, action) {
  return action.payload
}

function newMessage(state, action) {
  return [
    ...state,
    action.payload,
  ]
}
