var html = require('bel')

module.exports = {
  headerContent,
  dateContent,
  siblingMonthDateContent: dateContent,
  containerTemplate,
  headerTemplate,
  dateTemplate,
  siblingMonthDateTemplate: dateTemplate
}

function headerTemplate(content, options) { 
  if(options.noHeader)
    return
  return function(date) { 
    return html`<th>${content(date)}</th>`
  }
}

function headerContent(date) { 
  return html`<span>${date.toString().slice(0,3)}</span>` 
}

function dateTemplate(content, options)  { 
  return function(date, info)  { 
    var classList = []
    var day = info.dayOfMonth

    if(info.siblingMonth)
      classList.push(options.classPrefix + 'inactive')
    if(options.selected && options.selected.hasOwnProperty(day)) {
      classList = classList.concat(options.selected[day])
    }

    var element = html`<td>
      ${content(date, info)}
    </td>`
    if(classList.length)
      element.className = classList.join(' ')

    return element
  }
}

function dateContent(date) { 
  return html`<span>${date.getDate()}</span>` 
}

function containerTemplate(month, options)  { 
  var className = options.classPrefix + 'block'
  var headers = html`
    <tr>
      ${month.slice(0,1)}
    </tr>`
  var weeks = month.slice(1).map(row => html`
    <tr>
      ${row}
    </tr>`)
  return html`
    <table class="${className}">
      ${options.noHeader ? null : headers} 
      ${weeks}
    </table>`
}
