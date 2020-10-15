// @todo set timezone to 

// Date.UTC(year[, month[, day[, hour[, minute[, second[, millisecond]]]]]])
// const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
// const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

// console.log('-'.repeat(50), 'utcDate1.toUTCString()', utcDate1.toUTCString());
// // expected output: Fri, 02 Feb 1996 03:04:05 GMT

const getOperationData = require('./helpers/get-operation')
const getCurUtcDate = require('./helpers/get-current-utc-date')
const performOperation = require('./helpers/perform-operation')

const format = (dateStr) => dateStr.substring(0, (dateStr.length - 5))

module.exports = (dateStr) => {
  // determine operation (add/subtract)
  const operation = getOperationData(dateStr)

  console.log('-'.repeat(50), 'operation', operation);

  // get current utc date in a format that can be operated on
  const curUtcDate = getCurUtcDate()
  console.log('-'.repeat(50), 'curUtcDate', curUtcDate);

  // perform operation (will return sum and whether to round)
  const updatedDate = performOperation(operation, curUtcDate)
  // perform rounding

  // convert to utc

  // const calculatedDate = new Date(Date.UTC(year, month, day, hour, minute, seconds))
  const calculatedDate = new Date(
    Date.UTC(
      updatedDate.y,
      updatedDate.M,
      updatedDate.d,
      updatedDate.h,
      updatedDate.m,
      updatedDate.s
    )
  )

  const calculatedDateToIso = calculatedDate.toISOString()
  const formattedDate = format(calculatedDateToIso)
  // console.log('-'.repeat(50), 'formattedDate', formattedDate);


  return formattedDate
}