var html = require('bel')
var calendar = require('../..')

var cal = calendar(new Date())

var title = html`<h2>Basic current month calendar</h2>`
var container = html`<div class="calendar-container">${cal}</div>`

document.body.appendChild(title)
document.body.appendChild(container)
