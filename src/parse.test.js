process.env.TZ = 'GMT';

// mock date
const RealDate = Date.now()
beforeAll(() => {
  global.Date.now = jest.fn(() => new Date('2020-05-01T00:00:00Z').getTime())
})

afterAll(() => {
  global.Date.now = RealDate
})

const parse = require('./parse')

test('parses now+1d -> 2020-05-02T00:00:00 - now add 1 day', () => {
  // arrange 
  const expected = '2020-05-02T00:00:00'
  // act 
  // assert
  expect(parse('now+1d')).toBe(expected)

})