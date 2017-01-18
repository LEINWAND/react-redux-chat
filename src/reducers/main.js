/* @flow */
'use strict'

import type { Action } from '../actions/types'


type State = {
  user: string,
}


const initialState: State = {
  user: 'iosif',
}


export default function mainReducer(
  state: State = initialState, action: Action
): State {
  switch (action.type) {
    case 'CHANGE_USER':
      return changeUser(state, action)

    default:
      return state
  }
}


function changeUser(state, action) {
  return {
    ...state,
    user: action.payload.user,
  }
}
