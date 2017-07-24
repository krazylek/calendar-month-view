(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var html = {}
var calendar = require('../..')

module.exports = function() {
  var cal = calendar(new Date())
  var title = 'Basic current month calendar'
  return (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel2 = document.createElement("section")
var bel0 = document.createElement("h2")
ac(bel0, [arguments[0]])
var bel1 = document.createElement("div")
bel1.setAttribute("class", "calendar-container")
ac(bel1, [arguments[1]])
ac(bel2, ["\n      ",bel0,"\n      ",bel1,"\n    "])
      return bel2
    }(title,cal))
}

},{"../..":7,"/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js":17}],2:[function(require,module,exports){
var calendar = require('../..')
var html = {}
var css = 0

;((require('sheetify/insert')("div.calendar-flex {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.calendar-flex > div {\n  width: calc(99.9%/7);\n  border-bottom: 1px solid rgba(0,0,0,.05);\n  line-height: 1.8em;\n  height: 2.2em; \n  text-align: center;\n}\n\ndiv.inactive {\n  background-color: #eee;\n  color: #999;\n}\n\n.calendar-flex > div.header {\n  line-height: 2.6em;\n  color: #fff;\n  background-color: #c2185b;\n  font-variant: small-caps;\n}") || true) && "_724da832")

module.exports = function() {
  var cal = calendar(new Date(2017,6), {
    headerTemplate: content => (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel0 = document.createElement("div")
bel0.setAttribute("class", "header")
ac(bel0, [arguments[0]])
      return bel0
    }(content)),
    dateTemplate: content => (date, info) => (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel0 = document.createElement("div")
bel0.setAttribute("class", arguments[0])
ac(bel0, [arguments[1]])
      return bel0
    }(info.siblingMonth ? 'inactive' : 'current',content)),
    containerTemplate: month => (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel0 = document.createElement("div")
bel0.setAttribute("class", "calendar-flex")
ac(bel0, ["\n      ",arguments[0],"\n    "])
      return bel0
    }(month.reduce((acc, n) => acc.concat(n))))
  })
  var title = 'Customizing templates to display div/flexbox calendar'
  return (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel2 = document.createElement("section")
var bel0 = document.createElement("h2")
ac(bel0, [arguments[0]])
var bel1 = document.createElement("div")
bel1.setAttribute("class", "calendar-container custom-container")
ac(bel1, [arguments[1]])
ac(bel2, ["\n      ",bel0,"\n      ",bel1,"\n    "])
      return bel2
    }(title,cal))
}

},{"../..":7,"/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js":17,"sheetify/insert":15}],3:[function(require,module,exports){
var calendar = require('../..')
var html = {}
var css = 0
var d3TimeFormat = require('d3-time-format');
var locales = {
  fr: require('d3-time-format/locale/fr-FR.json'),
  es: require('d3-time-format/locale/es-ES.json'),
  en: require('d3-time-format/locale/en-US.json')
}

;((require('sheetify/insert')(".calendar-container.multiple {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.calendar-container.multiple > div {\n  min-width: 300px;\n}") || true) && "_fe8175eb")

function getFormatter(format, locale) {
  return d3TimeFormat.timeFormatLocale(locales[locale]).format(format)
}

function createCalendar(date, locale, weekStartDay) {
  var headersFormat = getFormatter('%a', locale)

  return calendar(date, {
    weekStartDay,
    headerContent: date => (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel0 = document.createElement("span")
ac(bel0, [arguments[0]])
      return bel0
    }(headersFormat(date)))
  })
}

function createTitle(date, locale) {
  var format = getFormatter('%B %Y', locale)

  return (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel0 = document.createElement("h3")
ac(bel0, [arguments[0]])
      return bel0
    }(format(date)))
}

module.exports = function() {
  var calDate = new Date()
  var title = 'I18N current month calendar, french, english (us) and spanish'
  return (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel5 = document.createElement("section")
var bel0 = document.createElement("h2")
ac(bel0, [arguments[0]])
var bel4 = document.createElement("div")
bel4.setAttribute("class", "calendar-container multiple")
var bel1 = document.createElement("div")
ac(bel1, ["\n        ",arguments[1]," \n        ",arguments[2]," \n      "])
var bel2 = document.createElement("div")
ac(bel2, ["\n        ",arguments[3]," \n        ",arguments[4]," \n      "])
var bel3 = document.createElement("div")
ac(bel3, ["\n        ",arguments[5]," \n        ",arguments[6]," \n      "])
ac(bel4, ["\n      ",bel1,"\n      ",bel2,"\n      ",bel3,"\n    "])
ac(bel5, ["\n    ",bel0,"\n    ",bel4,"\n  "])
      return bel5
    }(title,createTitle(calDate, 'fr'),createCalendar(calDate, 'fr', 1),createTitle(calDate, 'en'),createCalendar(calDate, 'en', 0),createTitle(calDate, 'es'),createCalendar(calDate, 'es', 1)))
}

},{"../..":7,"/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js":17,"d3-time-format":9,"d3-time-format/locale/en-US.json":10,"d3-time-format/locale/es-ES.json":11,"d3-time-format/locale/fr-FR.json":12,"sheetify/insert":15}],4:[function(require,module,exports){
var html = {}
var css = 0

;((require('sheetify/insert')("/** very basic calendar styling */\ntable.calendar-block {\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 1px solid rgba(0,0,0,.05);\n  width: 100%;\n}\n\n.calendar-block td,\n.calendar-block th {\n  font-size: 1em;\n  line-height: 1.8em;\n  height: 2.2em; \n  min-width: 1em;\n  text-align:center;\n  border: 1px solid rgba(0,0,0,.05);\n}\n\n.calendar-inactive { \n\tcolor: rgba(0,0,0,.2); \n}\n\n/** page style */\nbody {\n  font-family: sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nh2 {\n\tmargin-top: 3em;\n\tfont-weight: 100;\n}\n\n.calendar-container {\n  font-weight: 100;\n  min-width: 340px;\n}\n\n.calendar-block th {\n  line-height: 2.6em;\n  color: #fff;\n  background-color: #03a9f4;\n  font-variant: small-caps;\n}\n\nfooter {\n\tpadding: 2em;\n\tbackground-color: #eee;\n\tmargin: 3em 0 1em 0;\n\talign-items: stretch;\n\ttext-align: center;\n}") || true) && "_5297d05a")

function render() {
  return (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel6 = document.createElement("body")
var bel0 = document.createElement("h1")
ac(bel0, ["calendar-month-view examples"])
var bel5 = document.createElement("footer")
var bel2 = document.createElement("p")
var bel1 = document.createElement("a")
bel1.setAttribute("href", "https://github.com/krazylek/calendar-month-view")
ac(bel1, ["Github"])
ac(bel2, ["Contribute on ",bel1])
var bel4 = document.createElement("p")
var bel3 = document.createElement("a")
bel3.setAttribute("href", "http://pohl.fr")
ac(bel3, ["Benoit Pohl"])
ac(bel4, ["Created by ",bel3," (c) 2017"])
ac(bel5, ["\n        ",bel2,"\n        ",bel4,"\n      "])
ac(bel6, ["\n      ",bel0,"\n         \n      ",arguments[0],"\n      ",arguments[1],"\n      ",arguments[2],"\n      ",arguments[3],"\n      ",arguments[4],"\n\n      ",bel5,"\n    "])
      return bel6
    }(require('./basic')(),require('./selection')(),require('./marks')(),require('./i18n')(),require('./custom-container')()))
}

document.body = render()

},{"./basic":1,"./custom-container":2,"./i18n":3,"./marks":5,"./selection":6,"/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js":17,"sheetify/insert":15}],5:[function(require,module,exports){
var calendar = require('../..')
var html = {}
var css = 0

;((require('sheetify/insert')("/** some optional day customization */\n.calendar-container.marks .event span {,\n  font-weight: 700;\n  border-radius: 50%;\n  height: 1.8em;\n  width: 1.8em;\n  display: inline-block;\n  box-shadow: 0 1px 2px rgba(0,0,0,.14), 0 3px 3px -2px rgba(0,0,0,.2), 0 1px 8px 0 rgba(0,0,0,.12);\n}\n\n.calendar-container.marks .blue span {\n  background-color: #1e88e5;\n  color: #fff;\n}\n\n.calendar-container.marks .gray span {\n  background-color: #757575;\n  color: #fff;\n}\n\n.calendar-container.marks .green span {\n  background-color: #558B2F;\n  color: #fff;\n}\n\n.calendar-container.marks .yellow span {\n  background-color: #ffeb3b;\n}\n\n.calendar-container.marks .selected {\n  background-color: #67daff;\n}") || true) && "_e5f264a6")

module.exports = function() {
  var cal = calendar(new Date(2017,6), {
    selected: {
      '-1': ['event', 'blue', 'selected'],
      0: 'selected',
      1: 'selected',
      2: 'selected',
      3: ['event', 'green', 'selected'],
      4: 'selected',
      8: ['event', 'yellow'],
      25: ['event', 'gray']
    }
  })
  var title = 'July 2017 calendar with some marks'
  return (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel2 = document.createElement("section")
var bel0 = document.createElement("h2")
ac(bel0, [arguments[0]])
var bel1 = document.createElement("div")
bel1.setAttribute("class", "calendar-container marks")
ac(bel1, [arguments[1]])
ac(bel2, ["\n      ",bel0,"\n      ",bel1,"\n    "])
      return bel2
    }(title,cal))
}

},{"../..":7,"/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js":17,"sheetify/insert":15}],6:[function(require,module,exports){
var calendar = require('../..')
var html = {}
var css = 0

;((require('sheetify/insert')(".calendar-container.date-selection .selected {\n  background-color: #ffd95a;\n  border: 2px solid #f9a825;\n}") || true) && "_e248bbc0")

module.exports = function() {
  var calDate = new Date()
  var selection = {}
  selection[calDate.getDate()] = 'selected'
  var cal = calendar(calDate, {
    selected: selection
  })
  var title = 'Current month calendar with current day selected'
  return (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel2 = document.createElement("section")
var bel0 = document.createElement("h2")
ac(bel0, [arguments[0]])
var bel1 = document.createElement("div")
bel1.setAttribute("class", "calendar-container date-selection")
ac(bel1, [arguments[1]])
ac(bel2, ["\n      ",bel0,"\n      ",bel1,"\n    "])
      return bel2
    }(title,cal))
}

},{"../..":7,"/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js":17,"sheetify/insert":15}],7:[function(require,module,exports){
var monthArray = require('calendar-month-array')
var extend = require('xtend')
var defaultRenderer = require('./template')
var defaultPreset = {
  classPrefix: 'calendar-',
  selected: [],
  weekStartDay: 0,
  noHeader: false
}

module.exports = getCalendar

function getCalendar(date, opts) {
  var options = extend({}, defaultRenderer, defaultPreset, opts)   
  options.siblingMonthDateContent = options.siblingMonthDateContent || options.dateContent
  options.siblingMonthDateTemplate = options.siblingMonthDateTemplate || options.dateTemplate

  var month = monthArray(date, {
    weekStartDay: options.weekStartDay,
    formatHeader: format(options.headerContent, options.headerTemplate, options),
    formatDate: format(options.dateContent, options.dateTemplate, options),
    formatSiblingMonthDate: format(options.siblingMonthDateContent,options.siblingMonthDateTemplate, options),
  })

  return options.containerTemplate(month, options)
}

function format(renderContent, renderTemplate, options) {
  return function(date, data) { // data is position for headers, info for dates
    var content = renderContent(date, data, options)
    var template = renderTemplate(content, options) 
    return typeof template == 'function' ? template(date, data) : template
  }
}

},{"./template":18,"calendar-month-array":8,"xtend":16}],8:[function(require,module,exports){
/**
 * Returns an array of weeks, each containing an array of dates
 *
 * date: Date
 * opts: object {
 *   weekStartDay: int,
 *   formatDate: function(currentDate: Date, info: Object {
 *     dayOfMonth: int, 
 *     siblingMonth:  int,
 *     week: int,
 *     position: int
 *   })
 *   formatSiblingMonthDate: function(currentDate: Date, info: Object)
 *   formatHeader: function(currentDate: Date, position: int)
 * }
 */

module.exports = function (date, opts) {
  if (typeof date === 'string') date = new Date(date)
  if (!date) date = new Date()
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    opts = date
    date = new Date()
  }
  if (!opts) opts = {}

  var first = new Date(date)
  first.setHours(0)
  first.setMinutes(0)
  first.setSeconds(0)
  first.setDate(1)

  var last = new Date(date)
  last.setHours(0)
  last.setMinutes(0)
  last.setSeconds(0)
  last.setMonth(last.getMonth()+1)
  last.setDate(0)

  var weekStartDay = opts.weekStartDay || 0
  var formatDate = opts.formatDate || function (date) { return date }
  var formatSiblingMonthDate = opts.formatSiblingMonthDate || formatDate
  var day = 1 - (7 + first.getDay() - weekStartDay) % 7
  var weeks = Math.ceil((last.getDate() - day) / 7)
  var lines = []
  var headers = []

  for (var w = 0; w < weeks; w++) {
    var row = []
    for (var d = 0; d < 7; d++) {
      var currentDay = day + d
      var currentDate = createDateOffset(first, currentDay)
      var siblingMonth = checkSiblingMonth(currentDay) 
      var format = siblingMonth ? formatSiblingMonthDate : formatDate

      row.push(format(currentDate, {
        dayOfMonth: currentDay, 
        siblingMonth: siblingMonth,
        week: w,
        position: d
      }))

      if(opts.formatHeader && w === 0)
        headers.push(opts.formatHeader(currentDate, d)) 
    }
    day += 7
    lines.push(row)
  }

  if(opts.formatHeader)
    lines.unshift(headers)

  return lines

  function createDateOffset(date, offset) {
    var newDate = new Date(date)
    newDate.setDate(offset)
    return newDate
  }
  
  function checkSiblingMonth(day) {
    return day <= 0 ? -1 :
      day > last.getDate() ? 1 :
      0
  }
}

},{}],9:[function(require,module,exports){
// https://d3js.org/d3-time-format/ Version 2.0.5. Copyright 2017 Mike Bostock.
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('d3-time')) :
	typeof define === 'function' && define.amd ? define(['exports', 'd3-time'], factory) :
	(factory((global.d3 = global.d3 || {}),global.d3));
}(this, (function (exports,d3Time) { 'use strict';

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "S": formatSeconds,
    "U": formatWeekNumberSunday,
    "w": formatWeekdayNumber,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "S": formatUTCSeconds,
    "U": formatUTCWeekNumberSunday,
    "w": formatUTCWeekdayNumber,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "S": parseSeconds,
    "U": parseWeekNumberSunday,
    "w": parseWeekdayNumber,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0);
      if (i != string.length) return null;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "W" in d ? 1 : 0;
        var day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"};
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + d3Time.timeDay.count(d3Time.timeYear(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekNumberSunday(d, p) {
  return pad(d3Time.timeSunday.count(d3Time.timeYear(d), d), p, 2);
}

function formatWeekdayNumber(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(d3Time.timeMonday.count(d3Time.timeYear(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + d3Time.utcDay.count(d3Time.utcYear(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(d3Time.utcSunday.count(d3Time.utcYear(d), d), p, 2);
}

function formatUTCWeekdayNumber(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(d3Time.utcMonday.count(d3Time.utcYear(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

var locale$1;





defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale$1 = formatLocale(definition);
  exports.timeFormat = locale$1.format;
  exports.timeParse = locale$1.parse;
  exports.utcFormat = locale$1.utcFormat;
  exports.utcParse = locale$1.utcParse;
  return locale$1;
}

var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : exports.utcFormat(isoSpecifier);

function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : exports.utcParse(isoSpecifier);

exports.timeFormatDefaultLocale = defaultLocale;
exports.timeFormatLocale = formatLocale;
exports.isoFormat = formatIso;
exports.isoParse = parseIso;

Object.defineProperty(exports, '__esModule', { value: true });

})));

},{"d3-time":13}],10:[function(require,module,exports){
module.exports={
  "dateTime": "%x, %X",
  "date": "%-m/%-d/%Y",
  "time": "%-I:%M:%S %p",
  "periods": ["AM", "PM"],
  "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  "shortDays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "shortMonths": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
}

},{}],11:[function(require,module,exports){
module.exports={
  "dateTime": "%A, %e de %B de %Y, %X",
  "date": "%d/%m/%Y",
  "time": "%H:%M:%S",
  "periods": ["AM", "PM"],
  "days": ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
  "shortDays": ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  "months": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
  "shortMonths": ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
}

},{}],12:[function(require,module,exports){
module.exports={
  "dateTime": "%A, le %e %B %Y, %X",
  "date": "%d/%m/%Y",
  "time": "%H:%M:%S",
  "periods": ["AM", "PM"],
  "days": ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
  "shortDays": ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  "months": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
  "shortMonths": ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
}

},{}],13:[function(require,module,exports){
// https://d3js.org/d3-time/ Version 1.0.7. Copyright 2017 Mike Bostock.
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.d3 = global.d3 || {})));
}(this, (function (exports) { 'use strict';

var t0 = new Date;
var t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(new Date(+start)); while (offseti(start, step), floori(start), start < stop)
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}

var millisecond = newInterval(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return newInterval(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

var milliseconds = millisecond.range;

var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;

var second = newInterval(function(date) {
  date.setTime(Math.floor(date / durationSecond) * durationSecond);
}, function(date, step) {
  date.setTime(+date + step * durationSecond);
}, function(start, end) {
  return (end - start) / durationSecond;
}, function(date) {
  return date.getUTCSeconds();
});

var seconds = second.range;

var minute = newInterval(function(date) {
  date.setTime(Math.floor(date / durationMinute) * durationMinute);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getMinutes();
});

var minutes = minute.range;

var hour = newInterval(function(date) {
  var offset = date.getTimezoneOffset() * durationMinute % durationHour;
  if (offset < 0) offset += durationHour;
  date.setTime(Math.floor((+date - offset) / durationHour) * durationHour + offset);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getHours();
});

var hours = hour.range;

var day = newInterval(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
}, function(date) {
  return date.getDate() - 1;
});

var days = day.range;

function weekday(i) {
  return newInterval(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

var month = newInterval(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

var months = month.range;

var year = newInterval(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

var years = year.range;

var utcMinute = newInterval(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getUTCMinutes();
});

var utcMinutes = utcMinute.range;

var utcHour = newInterval(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getUTCHours();
});

var utcHours = utcHour.range;

var utcDay = newInterval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / durationDay;
}, function(date) {
  return date.getUTCDate() - 1;
});

var utcDays = utcDay.range;

function utcWeekday(i) {
  return newInterval(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / durationWeek;
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

var utcMonth = newInterval(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

var utcMonths = utcMonth.range;

var utcYear = newInterval(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

var utcYears = utcYear.range;

exports.timeInterval = newInterval;
exports.timeMillisecond = millisecond;
exports.timeMilliseconds = milliseconds;
exports.utcMillisecond = millisecond;
exports.utcMilliseconds = milliseconds;
exports.timeSecond = second;
exports.timeSeconds = seconds;
exports.utcSecond = second;
exports.utcSeconds = seconds;
exports.timeMinute = minute;
exports.timeMinutes = minutes;
exports.timeHour = hour;
exports.timeHours = hours;
exports.timeDay = day;
exports.timeDays = days;
exports.timeWeek = sunday;
exports.timeWeeks = sundays;
exports.timeSunday = sunday;
exports.timeSundays = sundays;
exports.timeMonday = monday;
exports.timeMondays = mondays;
exports.timeTuesday = tuesday;
exports.timeTuesdays = tuesdays;
exports.timeWednesday = wednesday;
exports.timeWednesdays = wednesdays;
exports.timeThursday = thursday;
exports.timeThursdays = thursdays;
exports.timeFriday = friday;
exports.timeFridays = fridays;
exports.timeSaturday = saturday;
exports.timeSaturdays = saturdays;
exports.timeMonth = month;
exports.timeMonths = months;
exports.timeYear = year;
exports.timeYears = years;
exports.utcMinute = utcMinute;
exports.utcMinutes = utcMinutes;
exports.utcHour = utcHour;
exports.utcHours = utcHours;
exports.utcDay = utcDay;
exports.utcDays = utcDays;
exports.utcWeek = utcSunday;
exports.utcWeeks = utcSundays;
exports.utcSunday = utcSunday;
exports.utcSundays = utcSundays;
exports.utcMonday = utcMonday;
exports.utcMondays = utcMondays;
exports.utcTuesday = utcTuesday;
exports.utcTuesdays = utcTuesdays;
exports.utcWednesday = utcWednesday;
exports.utcWednesdays = utcWednesdays;
exports.utcThursday = utcThursday;
exports.utcThursdays = utcThursdays;
exports.utcFriday = utcFriday;
exports.utcFridays = utcFridays;
exports.utcSaturday = utcSaturday;
exports.utcSaturdays = utcSaturdays;
exports.utcMonth = utcMonth;
exports.utcMonths = utcMonths;
exports.utcYear = utcYear;
exports.utcYears = utcYears;

Object.defineProperty(exports, '__esModule', { value: true });

})));

},{}],14:[function(require,module,exports){
var containers = []; // will store container HTMLElement references
var styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

var usage = 'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';

function insertCss(css, options) {
    options = options || {};

    if (css === undefined) {
        throw new Error(usage);
    }

    var position = options.prepend === true ? 'prepend' : 'append';
    var container = options.container !== undefined ? options.container : document.querySelector('head');
    var containerId = containers.indexOf(container);

    // first time we see this container, create the necessary entries
    if (containerId === -1) {
        containerId = containers.push(container) - 1;
        styleElements[containerId] = {};
    }

    // try to get the correponding container + position styleElement, create it otherwise
    var styleElement;

    if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
        styleElement = styleElements[containerId][position];
    } else {
        styleElement = styleElements[containerId][position] = createStyleElement();

        if (position === 'prepend') {
            container.insertBefore(styleElement, container.childNodes[0]);
        } else {
            container.appendChild(styleElement);
        }
    }

    // strip potential UTF-8 BOM if css was read from a file
    if (css.charCodeAt(0) === 0xFEFF) { css = css.substr(1, css.length); }

    // actually add the stylesheet
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText += css
    } else {
        styleElement.textContent += css;
    }

    return styleElement;
};

function createStyleElement() {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    return styleElement;
}

module.exports = insertCss;
module.exports.insertCss = insertCss;

},{}],15:[function(require,module,exports){
module.exports = require('insert-css')

},{"insert-css":14}],16:[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}],17:[function(require,module,exports){
module.exports = function yoyoifyAppendChild (el, childs) {
  for (var i = 0; i < childs.length; i++) {
    var node = childs[i]
    if (Array.isArray(node)) {
      yoyoifyAppendChild(el, node)
      continue
    }
    if (typeof node === 'number' ||
      typeof node === 'boolean' ||
      node instanceof Date ||
      node instanceof RegExp) {
      node = node.toString()
    }
    if (typeof node === 'string') {
      if (/^[\n\r\s]+$/.test(node)) continue
      if (el.lastChild && el.lastChild.nodeName === '#text') {
        el.lastChild.nodeValue += node
        continue
      }
      node = document.createTextNode(node)
    }
    if (node && node.nodeType) {
      el.appendChild(node)
    }
  }
}

},{}],18:[function(require,module,exports){
var html = {}

module.exports = {
  headerContent: function(date) { 
    return (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel0 = document.createElement("span")
ac(bel0, [arguments[0]])
      return bel0
    }(date.toString().slice(0,3))) 
  },
  headerTemplate: function(content, options) { 
    if(options.noHeader)
      return
    return (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel0 = document.createElement("th")
ac(bel0, [arguments[0]])
      return bel0
    }(content))
  },
  dateContent: function(date) { 
    return (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel0 = document.createElement("span")
ac(bel0, [arguments[0]])
      return bel0
    }(date.getDate())) 
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

      var element = (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel0 = document.createElement("td")
ac(bel0, [arguments[0]])
      return bel0
    }(content))
      if(classList.length)
        element.className = classList.join(' ')

      return element
    }
  },
  containerTemplate: function(month, options)  { 
    var className = options.classPrefix + 'block'
    var headers = (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel0 = document.createElement("tr")
ac(bel0, [arguments[0]])
      return bel0
    }(month[0]))
    var weeks = month.slice(1).map(function(row) {
      return (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel0 = document.createElement("tr")
ac(bel0, [arguments[0]])
      return bel0
    }(row))
    })

    return (function () {
      
      var ac = require('/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js')
      var bel0 = document.createElement("table")
bel0.setAttribute("class", arguments[0])
ac(bel0, ["\n        ",arguments[1]," \n        ",arguments[2],"\n      "])
      return bel0
    }(className,options.noHeader ? null : headers,weeks))
  }
}

},{"/mnt/c/Users/benoit/repo/calendar-month-view/node_modules/yo-yoify/lib/appendChild.js":17}]},{},[4]);
