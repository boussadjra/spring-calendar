'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CalendarContext = require('./CalendarContext');

var _CalendarContext2 = _interopRequireDefault(_CalendarContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Days = function Days(_ref) {
	var month = _ref.month;

	var _useContext = (0, _react.useContext)(_CalendarContext2.default),
	    moment = _useContext.moment,
	    year = _useContext.year,
	    events = _useContext.events,
	    setSelectedDay = _useContext.setSelectedDay;

	var startDay = moment(year + '-' + (month + 1)).startOf('month').day();
	var endDay = moment(year + '-' + (month + 1)).endOf('month').day();
	var daysOfMonth = [].concat(_toConsumableArray(Array(moment(year + '-' + (month + 1)).daysInMonth()))).map(function (x, k) {
		return {
			dayIndex: k + 1,
			belongsToThisMonth: true
		};
	});

	var prevMonthCountDays = month > 0 ? moment(year + '-' + month).daysInMonth() : moment(year - 1 + '-12').daysInMonth();

	for (var index = 0; index < startDay; index++) {
		daysOfMonth.unshift({
			dayIndex: prevMonthCountDays,
			belongsToThisMonth: false
		});
		prevMonthCountDays--;
	}
	for (var _index = 1; _index <= 6 - endDay; _index++) {
		daysOfMonth.push({
			dayIndex: _index,
			belongsToThisMonth: false
		});
	}
	var selectDay = function selectDay(day, belongsToThisMonth) {
		if (belongsToThisMonth) {
			setSelectedDay(day);
		} else {
			var d = void 0;
			if (day.index < 7) {
				if (day.month + 1 > 12) {
					d = _extends({}, day, { month: 1, fullDayString: getFullDayString(day.year + 1, 1, day.index) });
				} else {
					d = _extends({}, day, {
						month: day.month + 1,
						fullDayString: getFullDayString(day.year, day.month + 1, day.index)
					});
				}
			} else {
				if (day.month - 1 === 0) {
					d = _extends({}, day, { month: 12, fullDayString: getFullDayString(day.year - 1, 12, day.index) });
				} else {
					d = _extends({}, day, {
						month: day.month - 1,
						fullDayString: getFullDayString(day.year, day.month - 1, day.index)
					});
				}
			}
			setSelectedDay(d);
			console.log(d);
		}
	};
	/***
  *
  *
  */
	var getFullDayString = function getFullDayString(year, month, day) {
		return year + '-' + month + '-' + day;
	};
	/********
  *
  */
	return daysOfMonth.map(function (dm, i) {
		var fullDayString = getFullDayString(year, month + 1, dm.dayIndex);
		var isToday = moment().isSame(fullDayString, 'day');

		var day = {
			index: dm.dayIndex,
			month: month + 1,
			year: year,
			fullDayString: fullDayString
		};
		var evts = events.filter(function (event) {
			if (moment(event.startDate).isSame(day.fullDayString, 'day')) {
				return event;
			}
			return null;
		});
		return _react2.default.createElement(
			'div',
			{
				onClick: function onClick() {
					return selectDay(day, dm.belongsToThisMonth);
				},
				key: 'dm' + dm + i,
				className: 'spring-calendar-day ' + (dm.belongsToThisMonth ? 'spring-calendar-day-in-month' : 'spring-calendar-day-out-month') + ' \n            '
			},
			_react2.default.createElement(
				'div',
				{
					className: (isToday ? 'spring-calendar-today  spring-centered-content' : '') + '  spring-centered-content\''
				},
				_react2.default.createElement(
					'span',
					null,
					dm.dayIndex
				),
				evts.length > 0 && _react2.default.createElement(
					'sup',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'spring-calendar-day-events' },
						evts.length
					)
				)
			)
		);
	});
};

exports.default = Days;