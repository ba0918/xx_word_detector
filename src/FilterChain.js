export default class FilterChain {
  constructor(filters = []) {
    this.filters = filters
  }

  execute(input) {
    for (const filter of this.filters) {
      input = filter(input)
    }
    return input
  }
}
