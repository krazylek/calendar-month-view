var calendar = require('../..')
var html = require('bel')
var css = require('sheetify')

css('./flex.css')

var cal = calendar(new Date(2017,6), {
  headerTemplate: content => html`<div class="header">${content}</div>`,
  dateTemplate: content => (date, info) => html`<div class=${info.siblingMonth ? 'inactive' : 'current' }>${content}</div>`,
  containerTemplate: month => html`<div class="calendar-flex">
    ${month.reduce((acc, n) => acc.concat(n))}
  </div>`
})

var title = html`<h2>Customizing templates to display div/flexbox calendar</h2>`
var container = html`<div class="calendar-container custom-container">${cal}</div>`

document.body.appendChild(title)
document.body.appendChild(container)
