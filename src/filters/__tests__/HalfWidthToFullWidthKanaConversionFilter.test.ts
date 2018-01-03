import HalfWidthToFullWidthKanaConversionFilter from '../HalfWidthToFullWidthKanaConversionFilter'

it("HalfWidthToFullWidthKanaConversionFilter#execute", () => {
  const input = 'asdfあいうえおｱｲｳｴｵｶｷｸｹｺｶﾞｷﾞｸﾞｹﾞｺﾞｻｼｽｾｿｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾁﾂﾃﾄﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝｧｨｩｪｫｬｭｮｯｰﾞﾟ｡｢｣､･'
  const converted = 'asdfあいうえおアイウエオカキクケコガギグゲゴサシスセソザジズゼゾタチツテトダヂヅデドナニヌネノハヒフヘホバビブベボパピプペポマミムメモヤユヨラリルレロワヲンァィゥェォャュョッー゛゜。「」、・'
  const filter = new HalfWidthToFullWidthKanaConversionFilter()
  expect(filter.execute(input)).toBe(converted)
})
