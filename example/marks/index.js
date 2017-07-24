var calendar = require('../..')
var html = require('bel')
var css = require('sheetify')

css('./marks.css')

module.exports = function() {
  var cal = calendar(new Date(2017,6), {
    selected: {
      '-1': ['event', 'blue', 'selected'],
      0: 'selected',
      1: 'selected',
      2: 'selected',
      3: ['event', 'green', 'selected'],
      4: 'selected',
      8: ['event', 'yellow'],
      25: ['event', 'gray']
    }
  })
  var title = 'July 2017 calendar with some marks'
  return html`
    <section>
      <h2>${title}</h2>
      <div class="calendar-container marks">${cal}</div>
    </section>`
}
