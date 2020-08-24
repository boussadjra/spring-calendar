'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.scss');

var _Month = require('./Month');

var _Month2 = _interopRequireDefault(_Month);

var _useCalendar2 = require('./useCalendar');

var _useCalendar3 = _interopRequireDefault(_useCalendar2);

var _Months = require('./Months');

var _Months2 = _interopRequireDefault(_Months);

var _Day = require('./Day');

var _Day2 = _interopRequireDefault(_Day);

var _Week = require('./Week');

var _Week2 = _interopRequireDefault(_Week);

var _CalendarContext = require('./CalendarContext');

var _buttons = require('./buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpringCalendar = function SpringCalendar(_ref) {
	var locale = _ref.locale,
	    events = _ref.events,
	    color = _ref.color,
	    defaultType = _ref.defaultType;

	var colors = ["#004D40", "#00695C", "#2e003e", "#3d2352", "#05386B", "#379683", "#022140", "#265077", "#0c0023", "#190061", "#38003c", "#e90052", "#330136", "#5E1742", "#191226", "#F2355B", "#702C8E", "#ED1651", "#2A4C59", "#A62D43", "#103754", "#D53D13", "#332851", "#CA3074", "#2D4057", "#4097AA", "#214D72", "#2C7695", "#071E22", "#EE2E31", "#434858", "#FC6453", "#651e3e", "#851e3e", "#0072ff", "#00c6ff", "#34495e", "#41b883", "#2b2d5c", "#3465d8", "#323E40", "#D97D0D", "#1D1D2C", "#E40C2B", "#1D1D2C", "#C3002F", "#306073", "#F2385A", "#0f256e", "#01a168", "#05004E", "#fd5f00", "#3e1063", "#401372", "#2F2440", "#BA0F30"];
	var coloredEvents = events.map(function (event) {
		event.color = event.color ? event.color : colors[Math.round(Math.random() * 56) - 1];
		return event;
	});

	var _useCalendar = (0, _useCalendar3.default)('2020', locale, coloredEvents, defaultType),
	    selectedDate = _useCalendar.selectedDate,
	    changeView = _useCalendar.changeView,
	    gotoNext = _useCalendar.gotoNext,
	    gotoPrev = _useCalendar.gotoPrev;

	var _useState = (0, _react.useState)('day'),
	    _useState2 = _slicedToArray(_useState, 2),
	    mainContent = _useState2[0],
	    setMainContent = _useState2[1];

	(0, _react.useEffect)(function () {
		color ? document.documentElement.style.setProperty('--primary', color) : document.documentElement.style.setProperty('--primary', '#5118ac');
	}, [color]);

	(0, _react.useEffect)(function () {
		setMainContent(selectedDate.type);
	}, [selectedDate]);

	var DYNAMIC_CONTENT = {
		year: _react2.default.createElement(_Months2.default, { months: selectedDate.months ? selectedDate.months : [] }),
		month: _react2.default.createElement(_Month2.default, { extended: true, month: selectedDate.month ? selectedDate.month : null }),
		week: _react2.default.createElement(_Week2.default, { week: selectedDate.week ? selectedDate.week : null }),
		day: _react2.default.createElement(_Day2.default, { day: selectedDate })
	};
	/***
  * * functions
  */
	var selectMonth = function selectMonth(month) {
		changeView('month', month.fullLabel, false);
	};

	/**** */
	var selectDay = function selectDay(day) {
		changeView('day', day.label, false);
	};
	/**
  * JSX template
  */
	return _react2.default.createElement(
		_CalendarContext.CalendarProvider,
		{ value: { selectMonth: selectMonth, selectDay: selectDay } },
		_react2.default.createElement(
			'div',
			{ className: 'sc-wrapper' },
			_react2.default.createElement(
				'div',
				{ className: 'sc-year-wrapper' },
				_react2.default.createElement(
					'div',
					{ className: 'sc-year ' + (selectedDate.type !== 'year' ? 'sc-month-year' : '') },
					_react2.default.createElement(_buttons.PrevButton, { onClick: function onClick() {
							return gotoPrev();
						} }),
					_react2.default.createElement(
						'h2',
						null,
						selectedDate.value
					),
					_react2.default.createElement(_buttons.NextButton, { onClick: function onClick() {
							return gotoNext();
						} })
				),
				_react2.default.createElement(
					'div',
					{ className: 'sc-toggle' },
					_react2.default.createElement(
						'div',
						{
							onClick: function onClick() {
								return changeView('day', selectedDate.value, false, true);
							},
							className: 'spring-button ' + (selectedDate.type === 'day' ? 'spring-button-active' : '')
						},
						'Day'
					),
					_react2.default.createElement(
						'div',
						{
							onClick: function onClick() {
								return changeView('week', selectedDate.value, false, true);
							},
							className: 'spring-button ' + (selectedDate.type === 'week' ? 'spring-button-active' : '')
						},
						'Week'
					),
					_react2.default.createElement(
						'div',
						{
							onClick: function onClick() {
								return changeView('month', selectedDate.value, false, true);
							},
							className: 'spring-button ' + (selectedDate.type === 'month' ? 'spring-button-active' : '')
						},
						'Month'
					),
					_react2.default.createElement(
						'div',
						{
							onClick: function onClick() {
								return changeView('year', selectedDate.value, false, true);
							},
							className: 'spring-button ' + (selectedDate.type === 'year' ? 'spring-button-active' : '')
						},
						'Year'
					)
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'spring-main-content' },
				DYNAMIC_CONTENT[mainContent]
			)
		)
	);
};

exports.default = SpringCalendar;