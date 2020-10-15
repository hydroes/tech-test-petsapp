
// legend:
// d day
// M month
// y year
// h hour
// m minute
// s second
// w week
module.exports = () => {
  const currentDate = new Date(Date.now())

  const year = currentDate.getUTCFullYear()
  const month = currentDate.getUTCMonth()
  const day = currentDate.getUTCDate()
  const hour = currentDate.getUTCHours()
  const minute = currentDate.getUTCMinutes()
  const second = currentDate.getUTCSeconds()
  // const millisecond = currentDate.getUTCMilliseconds()

  // @todo: calculate week
  const utcDate = {
    d: day,
    M: month,
    y: year,
    h: hour,
    m: minute,
    s: second
  }

  return utcDate

}