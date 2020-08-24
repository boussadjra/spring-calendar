'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Week = function Week(_ref) {
	var week = _ref.week;

	var _useState = (0, _react.useState)([]),
	    _useState2 = _slicedToArray(_useState, 2),
	    mappedEvents = _useState2[0],
	    setMappedEvents = _useState2[1];

	var _useState3 = (0, _react.useState)([]),
	    _useState4 = _slicedToArray(_useState3, 2),
	    events = _useState4[0],
	    setEvents = _useState4[1];

	var _useState5 = (0, _react.useState)({}),
	    _useState6 = _slicedToArray(_useState5, 2),
	    focusedEvent = _useState6[0],
	    setFocusedEvent = _useState6[1];

	(0, _react.useEffect)(function () {
		var _events = week.weekdays.map(function (wd) {
			return wd.events;
		}).flat().sort(function (a, b) {
			return new Date(a.startDate).getHours() - new Date(b.startDate).getHours();
		}).map(function (event, i) {
			var startHour = new Date(event.startDate).getHours();
			var endHour = new Date(event.endDate).getHours();
			var endMinutes = new Date(event.endDate).getMinutes();

			event.style = {
				/*'grid-row': startHour + 1 + '/span ' + (endHour - startHour + 1),
    		'grid-column': event.weekday + 1,*/
				// "z-index": startHour + 1,
				background: event.color,
				height: (endHour - startHour) * 32 + 32 * endMinutes / 60 + 'px'
			};

			return event;
		});

		setEvents(_events);
	}, [week]);

	(0, _react.useEffect)(function () {
		function getEventsByHour(hour, day) {
			var _events = events.filter(function (e) {
				var startHour = new Date(e.startDate).getHours();
				return startHour === hour && day === e.weekday;
			});

			return _events.map(function (e, i) {
				e.style.left = i / _events.length * 90 + '%';
				e.style.top = '0px';
				return e;
			});
		}
		var _mappedEvents = [];

		if (events.length > 0) {
			for (var h = 0; h < 24; h++) {
				for (var j = 0; j < 7; j++) {
					var filteredEvents = getEventsByHour(h, j);

					_mappedEvents.push(filteredEvents);
				}
			}
		}

		setMappedEvents(_mappedEvents);
	}, [events]);

	var focusOnEvent = function focusOnEvent(event) {
		setFocusedEvent(event);
	};
	return _react2.default.createElement(
		'div',
		{ className: 'sc-week-wrapper' },
		_react2.default.createElement(
			'div',
			{ className: 'sc-weekdays' },
			week.weekdays.map(function (weekday, j) {
				return _react2.default.createElement(
					'div',
					{ className: 'sc-weekday', key: 'fwd' + j },
					_react2.default.createElement('div', {
						className: 'sc-weekday-label',
						'data-full': weekday.label,
						'data-short': weekday.labelShort
					}),
					_react2.default.createElement(
						'div',
						{ className: 'sc-weekday-date' },
						weekday.date
					)
				);
			})
		),
		_react2.default.createElement(
			'div',
			{ className: 'sc-week-hours-wrap' },
			_react2.default.createElement(
				'div',
				{ className: 'sc-week-hours' },
				week.hours.map(function (hour, index) {
					return _react2.default.createElement(
						'div',
						{ key: 'wh' + index, className: 'sc-week-hour' },
						hour.label
					);
				})
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'sc-week-events-wrap' },
			mappedEvents.map(function (event, index) {
				return _react2.default.createElement(
					'div',
					{ key: 'we' + index, className: 'sc-week-events' },
					event.map(function (item, i) {
						return _react2.default.createElement(
							'div',
							{
								key: 'evdd' + i + index,
								style: _extends({}, item.style),
								className: (item.title === focusedEvent.title ? 'sc-week-event-focused' : '') + ' sc-week-event',
								onClick: function onClick() {
									return focusOnEvent(item);
								}
							},
							item.title === focusedEvent.title ? _react2.default.createElement(
								_react2.default.Fragment,
								null,
								_react2.default.createElement(
									'div',
									{ className: 'sc-week-event-time' },
									_react2.default.createElement(
										'div',
										null,
										item.startTime
									),
									_react2.default.createElement(
										'div',
										null,
										item.endTime
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'sc-week-event-title' },
									item.title
								)
							) : _react2.default.createElement(
								'div',
								{ className: 'sc-week-event-title' },
								item.title
							)
						);
					})
				);
			})
		)
	);
};

exports.default = Week;