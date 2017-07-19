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
  options.siblingMonthDateContent = options.siblingMonthDateContent || options.dateContent
  options.siblingMonthDateTemplate = options.siblingMonthDateTemplate || options.dateTemplate

  var month = monthArray(date, {
    weekStartDay: options.weekStartDay,
    formatHeader: format(options.headerContent, options.headerTemplate, options),
    formatDate: format(options.dateContent, options.dateTemplate, options),
    formatSiblingMonthDate: format(options.siblingMonthDateContent,options.siblingMonthDateTemplate, options),
  })

  return options.containerTemplate(month, options)
}

function format(renderContent, renderTemplate, options) {
  return function(date, data) { // data is position for headers, info for dates
    var content = renderContent(date, data, options)
    var template = renderTemplate(content, options) 
    return typeof template == 'function' ? template(date, data) : template
  }
}
