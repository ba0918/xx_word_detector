import test from 'ava'
import KatakanaToHiraganaConversionFilter
  from '../../src/filters/KatakanaToHiraganaConversionFilter'

test(t => {
  const filter = new KatakanaToHiraganaConversionFilter()
  t.is('あいうえおわをん', filter.execute('アイウエオワヲン'))
})
