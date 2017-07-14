var monthArray = require('calendar-month-array')
var extend = require('xtend')
var defaultRenderer = require('./template')
var defaultPreset = {
  classPrefix: 'calendar-',
  selected: [],
  weekStartDay: 0,
  noHeader: false
}

module.exports = getCalendar

function getCalendar(date, opts) {
  var options = extend({}, defaultRenderer, defaultPreset, opts)   

  var month = monthArray(date, {
    formatHeader: options.headerTemplate(options.headerContent, options),
    formatDate: options.dateTemplate(options.dateContent, options),
    formatSiblingMonthDate: options.siblingMonthDateTemplate(options.siblingMonthDateContent, options)
  })

  return options.containerTemplate(month, options)
}
