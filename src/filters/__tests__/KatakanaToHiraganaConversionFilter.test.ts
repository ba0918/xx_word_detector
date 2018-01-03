import KatakanaToHiraganaConversionFilter from '../KatakanaToHiraganaConversionFilter'

it("KatakanaToHiraganaConversionFilter#execute", () => {
  const filter = new KatakanaToHiraganaConversionFilter()
  expect(filter.execute('アイウエオワヲン')).toBe('あいうえおわをん')
})
