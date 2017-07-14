var calendar = require('../')
var test = require('tape')

var calendarDate = new Date('1995-01-01 00:00:00')

test('calendar generate table', function (t) {
  var cal = calendar(calendarDate)
  t.equal(typeof cal, 'object')
  t.end()
})
