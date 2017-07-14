# calendar-month-view

Generates a html calendar 

# example

``` js
var calendar = require('calendar-month-view')
var cal = calendar(new Date(2017,6))
document.body.appendChild(cal)
```


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


# Formatting content

...


# Advanced customization

...


# license

MIT


# install

```
npm install calendar-month-view
```
