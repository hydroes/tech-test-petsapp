const getOperation = require('./get-operation')

test('determine a single add operation', () => {
  // arrange 
  const expected = {
    add: ['1d']
  }
  // act 
  const result = getOperation('now+1d')
  // assert
  expect(result).toEqual(expected)
})

test('determine a multi add operation', () => {
  // arrange 
  const expected = {
    add: ['1y', '2M', '3w', '4d', '5h', '6m', '7s']
  }
  // act 
  const result = getOperation('now+1y+2M+3w+4d+5h+6m+7s')
  // assert
  expect(result).toEqual(expected)
})

test('determine a single subtraction operation', () => {
  // arrange 
  const expected = {
    'subtract': ['1d']
  }
  // act 
  const result = getOperation('now-1d')
  // assert
  expect(result).toEqual(expected)
})

test('determine a multi subtraction operation', () => {
  // arrange 
  const expected = {
    'subtract': ['1y', '2M', '3w', '4d', '5h', '6m', '7s']
  }
  // act 
  const result = getOperation('now-1y-2M-3w-4d-5h-6m-7s')
  // assert
  expect(result).toEqual(expected)
})

// test('throw an error if operation could not be determined', () => {
//   // arrange 
//   const expected = {
//     'subtract': ['1y', '2m', '3w', '4d', '5h', '6m', '7s']
//   }
//   // act 
//   const result = getOperation('now-1y-2m-3w-4d-5h-6m-7s')
//   // assert
//   expect(result).toEqual(expected)
// })
