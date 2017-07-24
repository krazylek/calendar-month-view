var html = require('bel')
var css = require('sheetify')

css('./page.css')

function render() {
  return html`
    <body>
      <h1>calendar-month-view examples</h1>
         
      ${require('./basic')()}
      ${require('./selection')()}
      ${require('./marks')()}
      ${require('./i18n')()}
      ${require('./custom-container')()}

      <footer>
        <p>Contribute on <a href="https://github.com/krazylek/calendar-month-view">Github</a></p>
        <p>Created by <a href="http://pohl.fr">Benoit Pohl</a> (c) 2017</p>
      </footer>
    </body>`
}

document.body = render()
