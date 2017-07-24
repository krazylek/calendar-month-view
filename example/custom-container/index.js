var calendar = require('../..')
var html = require('bel')
var css = require('sheetify')

css('./flex.css')

module.exports = function() {
  var cal = calendar(new Date(2017,6), {
    headerTemplate: content => html`<div class="header">${content}</div>`,
    dateTemplate: content => (date, info) => html`<div class=${info.siblingMonth ? 'inactive' : 'current' }>${content}</div>`,
    containerTemplate: month => html`<div class="calendar-flex">
      ${month.reduce((acc, n) => acc.concat(n))}
    </div>`
  })
  var title = 'Customizing templates to display div/flexbox calendar'
  return html`
    <section>
      <h2>${title}</h2>
      <div class="calendar-container custom-container">${cal}</div>
    </section>`
}
