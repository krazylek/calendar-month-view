var html = require('bel')

module.exports = {
  headerContent: function(date) { 
    return html`<span>${date.toString().slice(0,3)}</span>` 
  },
  headerTemplate: function(content, options) { 
    if(options.noHeader)
      return
    return html`<th>${content}</th>`
  },
  dateContent: function(date) { 
    return html`<span>${date.getDate()}</span>` 
  },
  dateTemplate: function(content, options)  { 
    return function(date, info)  { 
      var classList = []
      var day = info.dayOfMonth

      if(info.siblingMonth)
        classList.push(options.classPrefix + 'inactive')
      if(options.selected && options.selected.hasOwnProperty(day)) {
        classList = classList.concat(options.selected[day])
      }

      var element = html`<td>${content}</td>`
      if(classList.length)
        element.className = classList.join(' ')

      return element
    }
  },
  containerTemplate: function(month, options)  { 
    var className = options.classPrefix + 'block'
    var headers = html`<tr>${month[0]}</tr>`
    var weeks = month.slice(1).map(function(row) {
      return html`<tr>${row}</tr>`
    })

    return html`
      <table class="${className}">
        ${options.noHeader ? null : headers} 
        ${weeks}
      </table>`
  }
}
