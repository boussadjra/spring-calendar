'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Days = require('./Days');

var _Days2 = _interopRequireDefault(_Days);

var _CalendarContext = require('./CalendarContext');

var _CalendarContext2 = _interopRequireDefault(_CalendarContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Month = function Month(_ref) {
	var month = _ref.month,
	    extended = _ref.extended;

	var _useContext = (0, _react.useContext)(_CalendarContext2.default),
	    moment = _useContext.moment,
	    setSelectedMonth = _useContext.setSelectedMonth;

	return _react2.default.createElement(
		'div',
		{ className: '  ' + (extended ? 'sc-month-wrapper-extended' : '') + ' sc-month-wrapper ' },
		_react2.default.createElement(
			'div',
			{
				className: 'sc-month spring-centered-content',
				onClick: function onClick() {
					return extended ? setSelectedMonth(null) : setSelectedMonth(month);
				}
			},
			month && month.label
		),
		moment.weekdaysShort().map(function (weekday, j) {
			return _react2.default.createElement(
				'div',
				{ className: 'sc-weekday spring-centered-content', key: 'wd' + j },
				weekday
			);
		}),
		month && _react2.default.createElement(_Days2.default, { month: month.index })
	);
};

exports.default = Month;