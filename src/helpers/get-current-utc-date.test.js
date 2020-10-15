process.env.TZ = 'GMT';

const getCurrentDate = require('./get-current-utc-date')

const RealDate = Date.now

beforeAll(() => {
  global.Date.now = jest.fn(() => new Date('2020-05-01T00:00:00Z').getTime())
})

afterAll(() => {
  global.Date.now = RealDate
})

test('retrieves the current utc date in object format', () => {
  // arrange
  const expected = { d: 1, M: 4, y: 2020, h: 0, m: 0, s: 0 }
  // act
  const result = getCurrentDate()

  // assert 
  expect(result).toEqual(expected)
})