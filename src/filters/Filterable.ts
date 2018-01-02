
export interface Filterable<T> {
  execute(input: T): T
}

export interface NumericFilterable extends Filterable<number> {}
export interface StringFilterable extends Filterable<string> {}
