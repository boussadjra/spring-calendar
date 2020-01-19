'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
//import { useSelector } from 'react-redux';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.scss');

var _momentWithLocales = require('moment/min/moment-with-locales');

var _momentWithLocales2 = _interopRequireDefault(_momentWithLocales);

var _Months = require('./Months');

var _Months2 = _interopRequireDefault(_Months);

var _Month = require('./Month');

var _Month2 = _interopRequireDefault(_Month);

var _CalendarContext = require('./CalendarContext');

var _Hours = require('./Hours');

var _Hours2 = _interopRequireDefault(_Hours);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpringCalendar = function SpringCalendar(_ref) {
	var locale = _ref.locale,
	    events = _ref.events,
	    color = _ref.color;

	var _useState = (0, _react.useState)(2020),
	    _useState2 = _slicedToArray(_useState, 2),
	    year = _useState2[0],
	    setYear = _useState2[1];

	var _useState3 = (0, _react.useState)(_momentWithLocales2.default.months().map(function (label, index) {
		return { label: label, index: index };
	})),
	    _useState4 = _slicedToArray(_useState3, 2),
	    months = _useState4[0],
	    setMonths = _useState4[1];

	var _useState5 = (0, _react.useState)('months'),
	    _useState6 = _slicedToArray(_useState5, 2),
	    mainContent = _useState6[0],
	    setMainContent = _useState6[1];

	var _useState7 = (0, _react.useState)('year'),
	    _useState8 = _slicedToArray(_useState7, 2),
	    headerContent = _useState8[0],
	    setHeaderContent = _useState8[1];

	var _useState9 = (0, _react.useState)(null),
	    _useState10 = _slicedToArray(_useState9, 2),
	    selectedMonth = _useState10[0],
	    setSelectedMonth = _useState10[1];

	var _useState11 = (0, _react.useState)(null),
	    _useState12 = _slicedToArray(_useState11, 2),
	    selectedDay = _useState12[0],
	    setSelectedDay = _useState12[1];
	//	const locale = useSelector(state => state.locale);

	//window.moment = moment;
	/**
  *
  * useEffect hooooooook
  */


	(0, _react.useEffect)(function () {
		document.documentElement.style.setProperty("--primary", color);
		_momentWithLocales2.default.locale(locale);console.log(locale);
		setMonths(_momentWithLocales2.default.months().map(function (label, index) {
			return { label: label, index: index };
		}));
	}, [locale, color]);
	/********** */
	(0, _react.useEffect)(function () {
		if (selectedMonth) {
			setMainContent('month');
			setHeaderContent('month');
		} else {
			setMainContent('months');
		}
	}, [selectedMonth]);
	/** */

	(0, _react.useEffect)(function () {
		if (selectedDay !== null) {
			setMainContent('hours');
			setHeaderContent('day');
		}
	}, [selectedDay]);
	/**
  * functions and constants
  */

	var DYNAMIC_CONTENT = {
		months: _react2.default.createElement(_Months2.default, null),
		month: _react2.default.createElement(_Month2.default, { month: selectedMonth, extended: selectedMonth !== null }),
		hours: _react2.default.createElement(_Hours2.default, { day: selectedDay })
	};

	var HEADER_CONTENT = {
		year: _react2.default.createElement(
			'h2',
			null,
			year
		),
		month: selectedMonth !== null ? _react2.default.createElement(
			'h2',
			null,
			(0, _momentWithLocales2.default)(year + '-' + (selectedMonth.index + 1)).format('MMMM YYYY')
		) : null,
		day: selectedDay !== null ? _react2.default.createElement(
			'h2',
			null,
			(0, _momentWithLocales2.default)(selectedDay.fullDayString).format('LL')
		) : null
	};
	/******* */

	var gotoPrev = function gotoPrev() {
		switch (headerContent) {
			case 'year':
				var y = year - 1;
				setYear(y);
				break;
			case 'month':
				var prevMonth = (0, _momentWithLocales2.default)(year + '-' + (selectedMonth.index + 1)).subtract(1, 'months');
				setYear(prevMonth.year());
				var index = prevMonth.month();
				setSelectedMonth({ index: index, label: _momentWithLocales2.default.months()[index] });

				break;
			case 'day':
				var prevDay = (0, _momentWithLocales2.default)(selectedDay.fullDayString).subtract(1, 'days');
				setYear(prevDay.year());

				setSelectedMonth({ index: prevDay.month() + 1, label: _momentWithLocales2.default.months()[prevDay.month()] });

				setSelectedDay({
					index: prevDay.date(),
					month: prevDay.month() + 1,
					year: prevDay.year(),
					fullDayString: year + '-' + (prevDay.month() + 1) + '-' + prevDay.date()
				});

				break;
			default:
				break;
		}
	};

	var gotoNext = function gotoNext() {
		switch (headerContent) {
			case 'year':
				var y = year + 1;
				setYear(y);
				break;
			case 'month':
				var nextMonth = (0, _momentWithLocales2.default)(year + '-' + (selectedMonth.index + 1)).add(1, 'months');
				setYear(nextMonth.year());
				var index = nextMonth.month();
				setSelectedMonth({ index: index, label: _momentWithLocales2.default.months()[index] });

				break;
			case 'day':
				var nextDay = (0, _momentWithLocales2.default)(selectedDay.fullDayString).add(1, 'days');

				setYear(nextDay.year());
				//let d = nextDay.toDate();
				setSelectedMonth({ index: nextDay.month() + 1, label: _momentWithLocales2.default.months()[nextDay.month()] });

				setSelectedDay({
					index: nextDay.date(),
					month: nextDay.month() + 1,
					year: nextDay.year(),
					fullDayString: year + '-' + (nextDay.month() + 1) + '-' + nextDay.date()
				});

				break;
			default:
				break;
		}
	};
	/*** */

	var selectMonth = function selectMonth() {
		setHeaderContent('month');
		setMainContent('month');
		var index = (0, _momentWithLocales2.default)().month();
		selectedMonth ? setSelectedMonth(null) : setSelectedMonth({ index: index, label: _momentWithLocales2.default.months()[index] });
	};

	var selectYear = function selectYear() {
		setHeaderContent('year');
		setMainContent('months');
		setYear((0, _momentWithLocales2.default)().year());
	};

	var selectDay = function selectDay() {
		setHeaderContent('day');
		setSelectedDay({ fullDayString: (0, _momentWithLocales2.default)().format('YYYY-MM-DD') });
	};
	/**
  * JSX template
  */
	return _react2.default.createElement(
		_CalendarContext.CalendarProvider,
		{ value: { moment: _momentWithLocales2.default, year: year, months: months, events: events, setSelectedMonth: setSelectedMonth, setSelectedDay: setSelectedDay } },
		_react2.default.createElement(
			'div',
			{ className: 'spring-calendar-wrapper' },
			_react2.default.createElement(
				'div',
				{ className: 'spring-calendar-year-wrapper' },
				_react2.default.createElement(
					'div',
					{
						className: 'spring-calendar-year ' + (selectedMonth || selectedDay ? 'spring-calendar-month-year' : '')
					},
					_react2.default.createElement(PrevButton, { onClick: function onClick() {
							return gotoPrev();
						} }),
					HEADER_CONTENT[headerContent],
					_react2.default.createElement(NextButton, { onClick: function onClick() {
							return gotoNext();
						} })
				),
				_react2.default.createElement(
					'div',
					{ className: 'spring-calendar-toggle' },
					_react2.default.createElement(
						'div',
						{
							onClick: function onClick() {
								return selectDay();
							},
							className: 'spring-button ' + (headerContent === 'day' ? 'spring-button-active' : '')
						},
						'Day'
					),
					_react2.default.createElement(
						'div',
						{
							onClick: function onClick() {
								return selectMonth();
							},
							className: 'spring-button ' + (headerContent === 'month' ? 'spring-button-active' : '')
						},
						'Month'
					),
					_react2.default.createElement(
						'div',
						{
							onClick: function onClick() {
								return selectYear();
							},
							className: 'spring-button ' + (headerContent === 'year' ? 'spring-button-active' : '')
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

var NextButton = function NextButton(_ref2) {
	var onClick = _ref2.onClick;

	return _react2.default.createElement(
		'button',
		{ className: 'spring-btn spring-btn-rounded', onClick: onClick },
		_react2.default.createElement(
			'svg',
			{ fill: 'white', x: '0px', y: '0px', width: '20px', height: '20px', viewBox: '0 0 306 306' },
			_react2.default.createElement(
				'g',
				{ id: 'chevron-right' },
				_react2.default.createElement('polygon', { points: '94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153' })
			)
		)
	);
};

var PrevButton = function PrevButton(_ref3) {
	var onClick = _ref3.onClick;

	return _react2.default.createElement(
		'button',
		{ className: 'spring-btn spring-btn-rounded', onClick: onClick },
		_react2.default.createElement(
			'svg',
			{
				x: '0px',
				fill: 'white',
				y: '0px',
				width: '20px',
				height: '20px',
				viewBox: '0 0 306 306',
				style: { transform: 'rotate(180deg)' }
			},
			_react2.default.createElement(
				'g',
				{ id: 'chevron-right' },
				_react2.default.createElement('polygon', { points: '94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153' })
			)
		)
	);
};

exports.default = SpringCalendar;