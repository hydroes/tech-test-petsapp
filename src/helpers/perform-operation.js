module.exports = (operation, utcDateObj) => {
  // @todo add week support
  let roundTo = false
  const utcDateObjToUpdate = { ...utcDateObj }

  //  { d: 1, M: 4, y: 2020, h: 0, m: 0, s: 0 }
  // add: ['1y', '2M', '3w', '4d', '5h', '6m', '7s']
  if (Array.isArray(operation['add']) === true) {
    operation['add'].forEach(element => {
      const dateKey = element.match(/([a-z]|[A-Z])/gm)
      const dateVal = +element.match(/\d+/gm)
      utcDateObjToUpdate[dateKey] += dateVal
    });
  }
  if (Array.isArray(operation['subtract']) === true) {
    operation['subtract'].forEach(element => {
      const dateKey = element.match(/([a-z]|[A-Z])/gm)
      const dateVal = +element.match(/\d+/gm)
      utcDateObjToUpdate[dateKey] -= dateVal
    });
  }

  return utcDateObjToUpdate
}