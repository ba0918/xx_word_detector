import test from 'ava'
import Filter from '../../src/filters/'

test(t => {
  // TODO
  const input = ` ｱｲｳｴｵ  ｓ　　dＨｆｚｚｚ 　`
  const encoded = `あいうえおsdhfzzz`

  const filter = new Filter.FilterChain([
    new Filter.SpaceDeletionFilter(),
    new Filter.HalfWidthToFullWidthKanaConversionFilter(),
    new Filter.KatakanaToHiraganaConversionFilter(),
    new Filter.FullWidthToHalfWidthAlphabetsConversionFilter(),
    new Filter.ToLowerCaseConversionFilter()
  ])
  t.is(encoded, filter.execute(input))
})
