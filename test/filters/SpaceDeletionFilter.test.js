import test from 'ava'
import SpaceDeletionFilter from '../../src/filters/SpaceDeletionFilter'

test(t => {
  const filter = new SpaceDeletionFilter()
  const expected = filter.execute(' 　 け　 い　 お　 ん　 ！　  　')
  t.is('けいおん！', expected)
})
