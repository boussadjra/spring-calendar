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

var Days = function Days(_ref) {
	var month = _ref.month;

	var _useContext = (0, _react.useContext)(_CalendarContext2.default),
	    selectDay = _useContext.selectDay;

	var _useState = (0, _react.useState)(-1),
	    _useState2 = _slicedToArray(_useState, 2),
	    indexDayToShowEvents = _useState2[0],
	    setIndexDayToShowEvents = _useState2[1];

	return _react2.default.createElement(
		_react2.default.Fragment,
		null,
		month.weekday > 0 && _react2.default.createElement('div', { className: 'sc-day sc-day-in-month', style: { gridColumnStart: 'span ' + month.weekday } }),
		month.days.map(function (day, dayIndex) {
			return _react2.default.createElement(
				'div',
				{
					key: day.index,
					onClick: function onClick(event) {

						if (month.extended) {
							dayIndex === indexDayToShowEvents ? setIndexDayToShowEvents(-1) : setIndexDayToShowEvents(dayIndex);
						} else {
							selectDay(day);
						}
					},
					className: (day.isToday ? 'sc-today  spring-centered-content' : '') + ' sc-day sc-day-in-month'
				},
				_react2.default.createElement(
					'div',
					null,
					day.index
				),
				day.events.length > 0 && _react2.default.createElement(
					'sup',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'sc-day-events-count' },
						day.events.length
					)
				),
				month.extended && day.events.length > 0 && _react2.default.createElement(
					'div',
					{ className: 'sc-day-events ' },
					day.events.map(function (e, i) {
						return i < 3 && _react2.default.createElement(
							'span',
							{ className: 'sc-event', key: i },
							e.title
						);
					}),
					day.events.length > 3 && _react2.default.createElement(
						'span',
						{ className: 'sc-event-more-indicator' },
						'+',
						day.events.length - 3
					),
					indexDayToShowEvents === dayIndex && day.events.length > 0 && _react2.default.createElement(
						'div',
						{ className: 'sc-more-events-wrp' },
						_react2.default.createElement(
							'div',
							{ className: 'sc-more-events' },
							_react2.default.createElement(
								'div',
								{ className: 'sc-events-detail' },
								_react2.default.createElement(
									'div',
									{ className: 'sc-events-detail-day' },
									day.localeFormat
								),
								day.events.map(function (e, i) {
									return _react2.default.createElement(
										'div',
										{ className: 'sc-event-detail', key: i },
										_react2.default.createElement(
											'div',
											{ className: 'sc-event-detail-time', key: i },
											_react2.default.createElement(
												'div',
												null,
												e.startTime
											),
											_react2.default.createElement(
												'div',
												null,
												e.endTime
											)
										),
										_react2.default.createElement(
											'div',
											{ className: 'sc-event-detail-title' },
											e.title
										)
									);
								})
							)
						)
					)
				)
			);
		})
	);
};

exports.default = Days;