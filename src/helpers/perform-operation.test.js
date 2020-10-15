const performOperation = require('./perform-operation')

test('Perform an add operation', () => {
  // arrange
  const curUtcDate = { d: 1, M: 4, y: 2020, h: 0, m: 0, s: 0 }
  const expected = { d: 5, M: 6, y: 2021, h: 5, m: 6, s: 7 }
  const operation = { add: ['1y', '2M', '4d', '5h', '6m', '7s'] }

  // act
  const result = performOperation(operation, curUtcDate)

  // assert
  expect(result).toEqual(expected)
})

test('Perform a subtraction operation', () => {
  // arrange
  const curUtcDate = { d: 2, M: 4, y: 2020, h: 3, m: 2, s: 4 }
  const expected = { d: 1, M: 3, y: 2019, h: 2, m: 1, s: 3 }
  const operation = { subtract: ['1y', '1M', '1d', '1h', '1m', '1s'] }

  // act
  const result = performOperation(operation, curUtcDate)

  // assert
  expect(result).toEqual(expected)
})

test.only('Perform a subtraction operation with negative month number', () => {
  // arrange
  const curUtcDate = { d: 2, M: 4, y: 2020, h: 3, m: 2, s: 4 }
  const expected = { d: 1, M: 3, y: 2019, h: 2, m: 1, s: 3 }
  const operation = { subtract: ['1y', '1M', '1d', '1h', '1m', '1s'] }

  // act
  const result = performOperation(operation, curUtcDate)

  // assert
  expect(result).toEqual(expected)
})
