import { StringFilterable } from './Filterable'

export default class ToLowerCaseConversionFilter implements StringFilterable {
  execute(input: string): string {
    return input.toLowerCase()
  }
}
