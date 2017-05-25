/* @flow */

import type { StringFilterable } from './Filterable'

export default class FullWidthToHalfWidthAlphabetsConversionFilter
  implements StringFilterable {
  execute(input: string): string {
    return input.replace(/[\uff01-\uff5e]/g, match => {
      return String.fromCharCode(match.charCodeAt(0) - 0xfee0)
    })
  }
}
