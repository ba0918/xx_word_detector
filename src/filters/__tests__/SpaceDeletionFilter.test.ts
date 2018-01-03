import SpaceDeletionFilter from '../SpaceDeletionFilter'

it("SpaceDeletionFilter#execute", () => {
  const filter = new SpaceDeletionFilter()
  expect(filter.execute(' 　 け　 い　 お　 ん　 ！　  　')).toBe('けいおん！')
})
