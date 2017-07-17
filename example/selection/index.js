var calendar = require('../..')
var html = require('bel')
var css = require('sheetify')

css('./selection.css')


var calDate = new Date()
var selection = {}
selection[calDate.getDate()] = 'selected'
var cal = calendar(calDate, {
  selected: selection
})

var title = html`<h2>Current month calendar with current day selected</h2>`
var container = html`<div class="calendar-container date-selection">${cal}</div>`

document.body.appendChild(title)
document.body.appendChild(container)
