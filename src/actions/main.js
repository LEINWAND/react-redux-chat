/* @flow */
'use strict'

import type { Action } from './types'


export function changeUser(user: string): Action {
  return {
    type: 'CHANGE_USER',
    payload: {
      user
    }
  }
}
