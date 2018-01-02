import { Filterable } from './Filterable'

export default class FilterChain<T> implements Filterable<T> {
  filters: Filterable<T>[]

  constructor(filters: Filterable<T>[]) {
    this.filters = filters
  }

  add(filter: Filterable<T>): this {
    this.filters.push(filter)
    return this
  }

  execute(input: T): T {
    return this.filters.reduce((input: T, filter: Filterable<T>) => filter.execute(input), input)
  }
}
