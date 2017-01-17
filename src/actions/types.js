/* @flow */
'use strict'

export type Action =
  // main
    { type: 'CHANGE_NAME', payload: { name: string } }
  // | { type: 'ANOTHER_ACTION', payload: { data: Object } }

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any
export type GetState = () => Object
export type ThunkAction = (dispatch: Dispatch, getState: GetState, extraArgument?: any ) => any
export type PromiseAction = Promise<Action>
