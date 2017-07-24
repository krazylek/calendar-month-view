var calendar = require('../..')
var html = require('bel')
var css = require('sheetify')

css('./selection.css')

module.exports = function() {
  var calDate = new Date()
  var selection = {}
  selection[calDate.getDate()] = 'selected'
  var cal = calendar(calDate, {
    selected: selection
  })
  var title = 'Current month calendar with current day selected'
  return html`
    <section>
      <h2>${title}</h2>
      <div class="calendar-container date-selection">${cal}</div>
    </section>`
}
