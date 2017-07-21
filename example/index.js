var html = require('bel')

var stylesheet = html`<link rel="stylesheet" href="page.css">`
document.head.appendChild(stylesheet)

require('./basic')
require('./selection')
require('./marks')
require('./i18n')
require('./custom-container')
