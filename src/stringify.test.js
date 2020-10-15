
test.skip('', () => {
  // arrange 
  const expected = new Date('2019-01-01T00:00:00')
  // act 
  // assert
  expect(parse('now-1y/y')).toBe(expected)

})