/* @flow */

import type { Filterable } from './Filterable'

export default class FilterChain<T> implements Filterable<T> {
  filters: Filterable<T>[]

  constructor(filters: Filterable<T>[]) {
    this.filters = filters
  }

  execute(input: T): T {
    for (const filter of this.filters) {
      input = filter.execute(input)
    }
    return input
  }
}
