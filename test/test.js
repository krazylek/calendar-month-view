var calendar = require('../')
var test = require('tape')

var calendarDate = new Date('2017-01-01 00:00:00')

test('calendar generate table', function (t) {
  var cal = calendar(calendarDate)
  t.equal(typeof cal, 'object')
  t.end()
})
test('header is optional', function (t) {
  var cal = calendar(new Date(2017, 0), {
    noHeader: true
  })
  t.false(cal.querySelectorAll('th').length)
  t.end()
})

test('first day of week is configurable', function (t) {
  var weekStartDay = 1
  var expectedFirstHeaderContent = 'Mon'
  var expectedFirstCellContent = '26'
  var cal = calendar(calendarDate, {
    weekStartDay
  })
  t.equal(cal.querySelector('th').textContent, expectedFirstHeaderContent)
  t.equal(cal.querySelector('td').textContent, expectedFirstCellContent)
  t.end()
})

test('header content is customizable', function (t) {
  var html = require('bel')
  var daysOfWeek = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam']
  var cal = calendar(new Date(2017, 0), {
    headerContent: (date, position) => html`<span>${daysOfWeek[position]}</span>`,
  })

  var headers = cal.querySelectorAll('th')
  t.ok(headers && headers.length)
  var headersContent = Array.from(headers, el => el.textContent)
  t.deepEqual(headersContent, daysOfWeek)
  t.end()
})

test('date content is customizable', function (t) {
  var expectedDateContent = 'month day'
  var expectedSiblingMonthDateContent = 'sibling month day'
  var cal = calendar(new Date(2017, 6), { //2017/07/01 is a saturday
    dateContent: () => expectedDateContent,
    siblingMonthDateContent: () => expectedSiblingMonthDateContent 
  })

  t.equal(cal.querySelector('tr:nth-of-type(3) > td').textContent, expectedDateContent) // third row would be current month only
  t.equal(cal.querySelector('tr > td').textContent, expectedSiblingMonthDateContent)
  t.end()
})

test('custom date content apply to sibling month date if not specified', function (t) {
  var expectedDateContent = 'just a day'
  var expectedSiblingMonthDateContent = 'just a day'
  var cal = calendar(new Date(2017, 6), { 
    dateContent: () => expectedDateContent,
  })

  t.equal(cal.querySelector('tr:nth-of-type(3) > td').textContent, expectedDateContent)
  t.equal(cal.querySelector('tr > td').textContent, expectedSiblingMonthDateContent)
  t.end()
})

test('custom sibling month date content does not apply to current month date if not specified', function (t) {
  var notExpectedDateContent = 'just a day'
  var expectedSiblingMonthDateContent = 'just a day'
  var cal = calendar(new Date(2017, 6), { 
    siblingMonthDateContent: () => expectedSiblingMonthDateContent 
  })

  t.notEqual(cal.querySelector('tr:nth-of-type(3) > td').textContent, notExpectedDateContent)
  t.equal(cal.querySelector('tr > td').textContent, expectedSiblingMonthDateContent)
  t.end()
})
