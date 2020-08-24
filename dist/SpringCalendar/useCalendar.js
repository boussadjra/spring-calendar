'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _momentWithLocales = require('moment/min/moment-with-locales');

var _momentWithLocales2 = _interopRequireDefault(_momentWithLocales);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/****
 *
 *
 *
 */

function useCalendar(thisYear, locale, events, defaultType) {
	window.moment = _momentWithLocales2.default;
	/***
  * useState hooooook
  */

	var _useState = (0, _react.useState)({ type: 'year', value: new Date().getFullYear(), default: true }),
	    _useState2 = _slicedToArray(_useState, 2),
	    selectedDate = _useState2[0],
	    setSelectedDate = _useState2[1];

	var _useState3 = (0, _react.useState)([]),
	    _useState4 = _slicedToArray(_useState3, 2),
	    weekdays = _useState4[0],
	    setWeekdays = _useState4[1];

	var _useState5 = (0, _react.useState)([]),
	    _useState6 = _slicedToArray(_useState5, 2),
	    weekdaysShort = _useState6[0],
	    setWeekdaysShort = _useState6[1];
	/***
  * useEffect hoook
  */

	(0, _react.useEffect)(function () {
		_momentWithLocales2.default.updateLocale(locale);

		setWeekdays(_momentWithLocales2.default.weekdays());
		setWeekdaysShort(_momentWithLocales2.default.weekdaysShort());
		changeView(defaultType);
	}, []);

	/****
  *
  * * functions
  */

	/**
  *
  * @param {*} _year is the year string name like '2020'
  */
	var generateMonths = function generateMonths(_year) {
		return _momentWithLocales2.default.months().map(function (label, i) {
			var index = i + 1;

			return getMonth(_year, index, label);
		});
	};
	/** */

	var generateMonth = function generateMonth(_date) {
		var index = _date.month() + 1;
		var label = _momentWithLocales2.default.months()[_date.month()];
		var _year = _date.year();

		return getMonth(_year, index, label);
	};
	/********* */
	var generateWeek = function generateWeek(_date) {
		window._date = _date;

		var _week = {
			weekdays: _momentWithLocales2.default.weekdays().map(function (dw, i) {
				var date = _date.subtract(_date.weekday() - i, 'day').date();
				var _month = _date.month() + 1;
				var _year = _date.year();
				var _day = {
					index: date,
					label: _year + '-' + _month + '-' + date
				};

				return {
					label: dw,
					labelShort: _momentWithLocales2.default.weekdaysShort()[i],
					date: date,
					month: _month,
					year: _year,
					statOfWeek: _date.subtract(_date.weekday(), 'day'),
					events: getEvents(_day)
				};
			}),
			hours: getHours()
		};

		return _week;
	};
	/** */
	/******* */
	var getMonth = function getMonth(_year, index, label) {
		var fullLabel = _year + '-' + index;
		var date = (0, _momentWithLocales2.default)(fullLabel);

		var month = { label: label, fullLabel: fullLabel, index: index, weekday: date.weekday(), weekdaysShort: weekdaysShort, weekdays: weekdays };

		month.days = [].concat(_toConsumableArray(Array(date.daysInMonth()))).map(function (_, dayIndex) {
			return getDay({
				index: dayIndex + 1,
				label: _year + '-' + index + '-' + (dayIndex + 1)
			});
		});

		return month;
	};

	/** */
	var getDay = function getDay(day) {
		day.localeFormat = (0, _momentWithLocales2.default)(day.label).format('LL');
		day.hours = getHours();
		day.events = getEvents(day);
		day.isToday = (0, _momentWithLocales2.default)().isSame(day.label, 'day');
		return day;
	};
	/**
  *
  */
	var getEvents = function getEvents(day) {
		var evts = events.filter(function (event) {
			return (0, _momentWithLocales2.default)(event.startDate).isSame(day.label, 'day');
		});

		return evts.map(function (event) {
			event.startTime = (0, _momentWithLocales2.default)(event.startDate).format('hh:mm A');
			event.endTime = (0, _momentWithLocales2.default)(event.endDate).format('hh:mm A');
			event.weekday = (0, _momentWithLocales2.default)(day.label).weekday();
			return event;
		});
	};
	/**
  *
  */
	var getHours = function getHours() {
		return [].concat(_toConsumableArray(Array(24))).map(function (x, k) {
			return {
				index: k,
				label: (k < 10 ? '0' + k : k) + ':00'
			};
		});
	};
	/**
  *
  * @param {string} type unit (year, month ...)
  * @param {date} value the date value
  * @param {boolean} isDefault the default value is the current date
  * @param {boolean} toggle the view is changed via a toggle button
  */
	var changeView = function changeView(type, value) {
		var isDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
		var toggle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

		/**
   * the following date value by default equals to the current
   *  year for example 2020-01-01
   *
   */
		var date = isDefault ? (0, _momentWithLocales2.default)() : (0, _momentWithLocales2.default)(value);
		/**
   * the following condition checking is used when we toggle month or day
   *  button which should show the current month/day since the default
   * value refers to the year start
   */

		date = toggle && !isDefault && !(0, _momentWithLocales2.default)().isSame((0, _momentWithLocales2.default)(value), type) ? (0, _momentWithLocales2.default)() : date;

		switch (type) {
			case 'day':
				setSelectedDate(_extends({}, selectedDate, {
					type: 'day',
					value: date.format('LL'),
					hours: getHours(),
					events: getEvents({ label: date })
				}));
				break;
			case 'week':
				setSelectedDate(_extends({}, selectedDate, {
					type: 'week',
					value: function (date) {
						var _date = date.subtract(date.weekday(), 'day');
						return _date.format('LL');
					}(date), //we refer the week value to its start date
					week: generateWeek(date)
				}));
				break;
			case 'month':
				setSelectedDate(_extends({}, selectedDate, {
					type: 'month',
					value: date.format('MMMM YYYY'),
					month: generateMonth(date)
				}));

				break;
			case 'year':
				setSelectedDate(_extends({}, selectedDate, {
					type: 'year',
					value: date.year().toString(),
					months: generateMonths(date.year())
				}));

				break;
			default:
				break;
		}
	};
	var gotoNext = function gotoNext() {
		var next = (0, _momentWithLocales2.default)(selectedDate.value).add(1, selectedDate.type + 's');

		changeView(selectedDate.type, next, false);
	};

	var gotoPrev = function gotoPrev() {
		var prev = (0, _momentWithLocales2.default)(selectedDate.value).subtract(1, selectedDate.type + 's');
		changeView(selectedDate.type, prev, false);
	};
	/****
  *
  * return hoook methods
  */
	return { gotoNext: gotoNext, gotoPrev: gotoPrev, selectedDate: selectedDate, changeView: changeView };
}

exports.default = useCalendar;