/* @flow */
'use strict'

import type { Action } from './types'


export function exampleAction(id: number): Action {
  return {
    type: 'EXAMPLE_ACTION',
    payload: {
      id
    }
  }
}

export function colorAction(color: string): Action {
  return {
    type: 'COLOR_ACTION',
    payload: {
      color
    }
  }
}
