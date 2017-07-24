var html = require('bel')
var calendar = require('../..')

module.exports = function() {
  var cal = calendar(new Date())
  var title = 'Basic current month calendar'
  return html`
    <section>
      <h2>${title}</h2>
      <div class="calendar-container">${cal}</div>
    </section>`
}
