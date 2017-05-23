import test from 'ava'
import SpeceDeletionFilter from '../../src/filters/SpeceDeletionFilter'

test(t => {
  const expected = SpeceDeletionFilter(' 　 け　 い　 お　 ん　 ！　  　')
  t.is('けいおん！', expected)
})
