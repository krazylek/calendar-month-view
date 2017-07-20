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
<table class="calendar-block">
  <tr>
    <th><span>Sun</span></th>
    <th><span>Mon</span>
    ...

  </tr>
  <tr>
    <td class="calendar-inactive"><span>25</span></td>
    <td class="calendar-inactive"><span>26</span></td>
    ...

  </tr>
  <tr>
    <td><span>2</span></td>
    <td><span>3</span></td>
    ...

  </tr>
  ...

</table>
```


# try it

Run

```
npm run example
```

to start a demo page on port 9966.


# customization

## custom day classnames 

To add some styling to specific days, there is a `selected` option, 
a map of calendar dates to classnames.

```js
var cal = calendar(new Date(2017,6), {
  selected: {
    '-1': 'shore-shopping', // previous and next month are offset
    0: 'activity-code ', // last day of previous month
    1: 'rest', // first day of current month
    2: ['activity-sport', 'shore-cleaning'], //array is ok...
    3: 'work activity-photgraphy' // ... or space separated words is similar
  }
})
```

Result:

```html
    ...
    
    <td class="calendar-inactive"><span>28</span></td>
    <td class="calendar-inactive shore-shopping"><span>29</span></td>
    <td class="calendar-inactive activity-code "><span>30</span></td>
    <td class="rest"><span>1</span></td>
  </tr>
  <tr>
    <td class="activity-sport shore-cleaning"><span>2</span></td>
    <td class="work activity-photgraphy"><span>3</span></td>
    ...

```

Check the examples in [selection](https://github.com/krazylek/calendar-month-array/tree/master/example/selection/)
or [marks](https://github.com/krazylek/calendar-month-array/tree/master/example/marks/).


## rewriting content

The header cells and day cells content are customizable.
Specify those options to get what you want inside the table th or td:


``` js
var cal = calendar(new Date(2017,6), {
  headerContent: (date) => date.toString().slice(0, 1),
  dateContent: (date) => {
    var el = document.createElement('div')
    el.innerText = date.getDate()
    return el
  },
  siblingMonthDateContent: () => ''
})
```

Result:

```html
<table class="calendar-block">
  <tr>
    <th>S</th>
    <th>M</th>
    ...

  </tr>
  <tr>
    <td class="calendar-inactive"></td>
    <td class="calendar-inactive"></td>
    ...

    <td><div>1</div></td>
  </tr>
  <tr>
    <td><div>2</div></td>
    ...

```
## advanced customization

...


# i18n

Internationalization is let to you, so you can use any i18n libray or just do it yourself.
Usual way would be to specify `headerContent` in options:

```
var calendar = require('calendar-month-view')
var html = require('bel')
var daysOfWeekFr = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'] // should be aligned to weekStartDay!
var cal = calendar(new Date(2017, 0), {
  headerContent: (date, position) => html`<span>${daysOfWeekFr(position)}</span>`
})
```

For a complete example, check [this file](https://github.com/krazylek/calendar-month-view/blob/master/example/i18n/index.js) using `d3-time-format` module.


# api

``` js
var calendar = require('calendar-month-view')
```

## var cal = calendar(date, opts)

Return a html table element for the month given in `date`, a `Date` instance.

* `opts.weekStartDay` - set the first day of week, default 0 (Sunday). Monday would be 1.
* `opts.noHeader` - do not display days name header.
* `opts.selected` - specify how to format some cells, key is `dayOfMonth`, value is a string or array of classes to add for this day.
* `opts.classPrefix` - prefix the classnames used in the project, default is `calendar-`.
* `opts.headerContent(date, info)` - custom header cell content, check [calendar-month-array API](https://github.com/krazylek/calendar-month-array#var-weeks--calendardate-opts) for details.
* `opts.dateContent(date, info)` - custom date cell content.
* `opts.siblingMonthDateContent(date, info)` - specific content when other month dates are displayed, defaults to `opts.dateContent`.


# compatibility

Using [yo-yoify](https://github.com/shama/yo-yoify) with `browserify`, this module should work fine on pretty old browsers.

Examples and tests are written for more recent es6 browsers.


# license

MIT


# install

```
npm install calendar-month-view
```
