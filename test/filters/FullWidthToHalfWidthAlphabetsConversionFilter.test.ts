import test from 'ava'
import FullWidthToHalfWidthAlphabetsConversionFilter
  from '../../src/filters/FullWidthToHalfWidthAlphabetsConversionFilter'

test(t => {
  const input = `０１２３４５６７８９ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～`
  const encoded = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`

  const filter = new FullWidthToHalfWidthAlphabetsConversionFilter()
  t.is(encoded, filter.execute(input))
})
