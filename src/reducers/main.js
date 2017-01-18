/* @flow */
'use strict'

import type { Action } from '../actions/types'


type State = {
  name: string,
}


const initialState: State = {
  name: 'iosif',
}


export default function mainReducer(
  state: State = initialState, action: Action
): State {
  switch (action.type) {
    case 'CHANGE_NAME':
      return changeName(state, action)

    default:
      return state
  }
}


function changeName(state, action) {
  return {
    ...state,
    name: action.payload.name,
  }
}
