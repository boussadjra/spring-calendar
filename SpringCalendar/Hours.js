'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CalendarContext = require('./CalendarContext');

var _CalendarContext2 = _interopRequireDefault(_CalendarContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Hours = function Hours(_ref) {
	var day = _ref.day;

	var _useContext = (0, _react.useContext)(_CalendarContext2.default),
	    events = _useContext.events,
	    moment = _useContext.moment;

	var _useState = (0, _react.useState)([]),
	    _useState2 = _slicedToArray(_useState, 2),
	    customEvents = _useState2[0],
	    setCustomEvents = _useState2[1];

	/****
  *
  */


	(0, _react.useEffect)(function () {
		var e = events.filter(function (event) {
			if (moment(event.startDate).isSame(day.fullDayString, 'day')) {
				return event;
			}
			return null;
		});
		var gridColumnStart = 3;
		var ev = e.map(function (event) {
			var tmp = {
				title: event.title,
				startDate: moment(event.startDate),
				endDate: moment(event.endDate),
				style: {}
			};

			tmp.style.gridRowStart = tmp.startDate.hour() + 1;
			tmp.style.height = (tmp.endDate.hour() - tmp.startDate.hour()) * 48 + 4 + 'px';
			return tmp;
		});
		ev = ev.map(function (event, i) {
			var k = 0;
			while (k < i) {
				if (event.startDate.hour() >= ev[k].startDate.hour() && event.startDate.hour() <= ev[k].endDate.hour() || ev[k].startDate.hour() >= event.startDate.hour() && ev[k].startDate.hour() <= event.endDate.hour()) {
					gridColumnStart++;
					event.style.gridColumnStart = gridColumnStart;
					event.style.marginLeft = '12px';
				}
				k++;
			}
			return event;
		});

		setCustomEvents(ev);
	}, [events, day, moment]);
	/***
  *
  */
	var dayHours = [].concat(_toConsumableArray(Array(24))).map(function (x, k) {
		return {
			index: k,
			label: (k < 10 ? '0' + k : k) + ':00'
		};
	});
	/**
  *
  * JSX template
  */
	return _react2.default.createElement(
		'div',
		{ className: 'spring-calendar-hours-wrapper' },
		dayHours.map(function (hour, i) {
			return _react2.default.createElement(
				'div',
				{ key: 'h' + i, className: 'spring-calendar-hour' },
				hour.label
			);
		}),
		customEvents.map(function (event, k) {
			return _react2.default.createElement(
				'div',
				{ key: 'e' + k, style: event.style, className: 'spring-calendar-event' },
				event.title
			);
		})
	);
};

exports.default = Hours;