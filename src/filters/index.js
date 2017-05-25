import FilterChain from './FilterChain'
import SpaceDeletionFilter from './SpaceDeletionFilter'
import HalfWidthToFullWidthKanaConversionFilter
  from './HalfWidthToFullWidthKanaConversionFilter'
import KatakanaToHiraganaConversionFilter
  from './KatakanaToHiraganaConversionFilter'
import FullWidthToHalfWidthAlphabetsConversionFilter
  from './FullWidthToHalfWidthAlphabetsConversionFilter'
import ToLowerCaseConversionFilter from './ToLowerCaseConversionFilter'

export default {
  FilterChain,
  SpaceDeletionFilter,
  HalfWidthToFullWidthKanaConversionFilter,
  KatakanaToHiraganaConversionFilter,
  FullWidthToHalfWidthAlphabetsConversionFilter,
  ToLowerCaseConversionFilter
}
