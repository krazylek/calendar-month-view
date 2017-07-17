# calendar-month-view

Generates a html calendar 

# example

``` js
var calendar = require('calendar-month-view')
var cal = calendar(new Date(2017,6))
document.body.appendChild(cal)
```

This produce an html table element:

```html

# Formatting content



# I18N

Internationalization is let to you, so you can use any i18n libray or just do it yourself.
Usual way would be to specify `headerContent` in options:

```
var calendar = require('calendar-month-view')
var html = require('bel')
var daysOfWeek = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'] // should be aligned to weekStartDay!
var cal = calendar(new Date(2017, 0), {
  headerContent: (date, position) => html`<span>${daysOfWeek(position)}</span>`
})
```

For a complete example, check [this file](https://github.com/krazylek/calendar-month-view/blob/master/example/i18n/index.js) using `d3-time-format` module.



# Advanced customization

...

# api

``` js
var calendar = require('calendar-month-view')
```

## var cal = calendar(date, opts)

Return a html table element for the month given in `date`, a `Date` instance.

* `opts.weekStartDay` - set the first day of week, default 0 (Sunday). Monday would be 1.
* `opts.noHeader` - do not display days name header.
* `opts.selected` - specify how to format some cells, key is `dayOfMonth`, value is a string or array of classes to add at this day.
* `opts.classPrefix` - prefix the classnames used in the project, default - `calendar-`.



# license

MIT


# install

```
npm install calendar-month-view
```
