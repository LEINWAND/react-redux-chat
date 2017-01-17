/* @flow */
'use strict'

import type { Action } from '../actions/types'


type State = {
  id: number,
  color: string,
}


const initialState: State = {
  id: 0,
  color: '#0f0',
}


export default function mainReducer(
  state: State = initialState, action: Action
): State {
  switch (action.type) {
    case 'EXAMPLE_ACTION':
      return exampleAction(state, action)

    case 'COLOR_ACTION':
      return colorAction(state, action)

    default:
      return state
  }
}


function exampleAction(state, action) {
  return {
    ...state,
    id: action.payload.id,
  }
}

function colorAction(state, action) {
  return {
    ...state,
    color: action.payload.color,
  }
}
