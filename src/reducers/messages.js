/* @flow */
'use strict'

import type { Action } from '../actions/types'


export type Message = {
  id: number,
  name: string,
  text: string,
  createdAt: number,
}


const initialState: Array<Message> = [{
  id: 0,
  name: 'iosif',
  text: 'hellow !',
  createdAt: 1484693358,
}, {
  id: 1,
  name: 'vali',
  text: 'heeey !',
  createdAt: 1484693358 + 86400,
}, {
  id: 2,
  name: 'iosif',
  text: 'how are you',
  createdAt: 1484693358 + 86400*2,
}, {
  id: 3,
  name: 'vali',
  text: 'i\'m okay :)',
  createdAt: 1484693358 + 86400*3,
}, {
  id: 4,
  name: 'vali',
  text: 'nice to see you !',
  createdAt: 1484693358 + 86400*4,
}]

type State = Array<Message>


export default function messagesReducer(
  state: State = initialState, action: Action
): State {
  switch (action.type) {
    case 'NEW_MESSAGE':
      return newMessage(state, action)

    default:
      return state
  }
}


function newMessage(state, action) {
  return [
    ...state,
    action.payload,
  ]
}
