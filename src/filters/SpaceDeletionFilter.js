/* @flow */

import { StringFilterable } from './Filterable'

export default class SpaceDeletionFilter implements StringFilterable {
  execute(input: string): string {
    return input.replace(/\s+/g, '')
  }
}
