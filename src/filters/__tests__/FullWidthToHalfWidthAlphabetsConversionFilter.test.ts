import FullWidthToHalfWidthAlphabetsConversionFilter from '../FullWidthToHalfWidthAlphabetsConversionFilter'

it("HalfWidthToFullWidthKanaConversionFilter#execute", () => {
  const input = `０１２３４５６７８９ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～`
  const converted = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`
  const filter = new FullWidthToHalfWidthAlphabetsConversionFilter()
  expect(filter.execute(input)).toBe(converted)
})
