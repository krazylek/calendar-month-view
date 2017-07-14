var calendar = require('../')
var html = require('bel')

var stylesheet = html`<link rel="stylesheet" href="basic.css">`

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

var container = html`<div class="calendar-container">${cal}</div>`

document.head.appendChild(stylesheet)
document.body.appendChild(container)
