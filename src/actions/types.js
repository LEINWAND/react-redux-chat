/* @flow */
'use strict'

export type Action =
  // main
    { type: 'EXAMPLE_ACTION', payload: { id: number } }
  | { type: 'COLOR_ACTION', payload: { color: string } }
  // | { type: 'ANOTHER_ACTION', payload: { data: Object } }

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any
export type GetState = () => Object
export type ThunkAction = (dispatch: Dispatch, getState: GetState, extraArgument?: any ) => any
export type PromiseAction = Promise<Action>
