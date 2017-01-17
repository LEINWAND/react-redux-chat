/* @flow */
'use strict'

import type { Action } from './types'


export function changeName(name: string): Action {
  return {
    type: 'CHANGE_NAME',
    payload: {
      name
    }
  }
}
