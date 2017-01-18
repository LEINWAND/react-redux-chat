/* @flow */
'use strict'

import type { Message } from '../reducers/messages'


export type Action =
  // main
    { type: 'CHANGE_USER', payload: { user: string } }

  // messages
  | { type: 'NEW_MESSAGE', payload: Message }

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any
export type GetState = () => Object
export type ThunkAction = (dispatch: Dispatch, getState: GetState, extraArgument?: any ) => any
export type PromiseAction = Promise<Action>
