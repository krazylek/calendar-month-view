var html = require('bel')
var css = require('sheetify')

function sourceLink(example) {
  var href = `https://github.com/krazylek/calendar-month-view/tree/master/example/${example}/index.js` 
  return html`<p><a href="${href}">View sources</a></p>`
}

css('./page.css')

function render() {
  return html`
    <body>
      <h1>calendar-month-view examples</h1>
         
      ${require('./basic')()}
      ${sourceLink('basic')}

      ${require('./selection')()}
      ${sourceLink('selection')}
      
      ${require('./marks')()}
      ${sourceLink('marks')}
      
      ${require('./i18n')()}
      ${sourceLink('i18n')}
      
      ${require('./custom-container')()}
      ${sourceLink('custom-container')}

      <footer>
        <p>Contribute on <a href="https://github.com/krazylek/calendar-month-view">Github</a></p>
        <p>Created by <a href="http://pohl.fr">Benoit Pohl</a> (c) 2017</p>
      </footer>
    </body>`
}

document.body = render()

