import Filter from '../'

it("FilterChain#execute", () => {
  const input = ` ｱｲｳｴｵ  ｓ　　dＨｆｚｚｚ 　`
  const converted = `あいうえおsdhfzzz`
  const filter = new Filter.FilterChain([
    new Filter.SpaceDeletionFilter(),
    new Filter.HalfWidthToFullWidthKanaConversionFilter(),
    new Filter.KatakanaToHiraganaConversionFilter(),
    new Filter.FullWidthToHalfWidthAlphabetsConversionFilter(),
    new Filter.ToLowerCaseConversionFilter()
  ])
  expect(filter.execute(input)).toBe(converted)
})
