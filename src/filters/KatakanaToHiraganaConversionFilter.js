/* @flow */

import type { StringFilterable } from './Filterable'

export default class KatakanaToHiraganaConversionFilter
  implements StringFilterable {
  execute(input: string): string {
    return input.replace(/[\u30a1-\u30f6]/g, match => {
      return String.fromCharCode(match.charCodeAt(0) - 0x60)
    })
  }
}
