const add = (a, b) => {
  return
}

// addition takes precedence of subtraction
module.exports = (dateToParse) => {
  // @todo: string to lower
  // @todo validation on dateToParse: ordering of time, duplication of time
  const addSplit = dateToParse.split('+')
  if (Array.isArray(addSplit) && addSplit.shift() === 'now') {

    return {
      add: [...addSplit]
    }

  }

  const subtractionSplit = dateToParse.split('-')
  if (Array.isArray(subtractionSplit) && subtractionSplit.shift() === 'now') {
    return {
      subtract: [...subtractionSplit]
    }
  }


}