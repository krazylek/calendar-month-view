var calendar = require('../..')
var html = require('bel')
var css = require('sheetify')
var d3TimeFormat = require('d3-time-format');
var locales = {
  fr: require('d3-time-format/locale/fr-FR.json'),
  es: require('d3-time-format/locale/es-ES.json'),
  en: require('d3-time-format/locale/en-US.json')
}

css('./i18n.css')

function getFormatter(format, locale) {
  return d3TimeFormat.timeFormatLocale(locales[locale]).format(format)
}

function createCalendar(date, locale, weekStartDay) {
  var headersFormat = getFormatter('%a', locale)

  return calendar(date, {
    weekStartDay,
    headerContent: date => html`<span>${headersFormat(date)}</span>`
  })
}

function createTitle(date, locale) {
  var format = getFormatter('%B %Y', locale)

  return html`<h3>${format(date)}</h3>`
}

var calDate = new Date()
var title = html`<h2>I18N current month calendar, french, english (us) and spanish</h2>`
var container = html`<div class="calendar-container multiple">
  <div>
    ${createTitle(calDate, 'fr')} 
    ${createCalendar(calDate, 'fr', 1)} 
  </div>
  <div>
    ${createTitle(calDate, 'en')} 
    ${createCalendar(calDate, 'en', 0)} 
  </div>
  <div>
    ${createTitle(calDate, 'es')} 
    ${createCalendar(calDate, 'es', 1)} 
  </div>
</div>`

document.body.appendChild(title)
document.body.appendChild(container)
