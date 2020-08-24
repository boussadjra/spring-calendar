'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Days = require('./Days');

var _Days2 = _interopRequireDefault(_Days);

var _CalendarContext = require('./CalendarContext');

var _CalendarContext2 = _interopRequireDefault(_CalendarContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Month = function Month(_ref) {
	var extended = _ref.extended,
	    month = _ref.month;

	var _useContext = (0, _react.useContext)(_CalendarContext2.default),
	    selectMonth = _useContext.selectMonth;

	return _react2.default.createElement(
		'div',
		{ className: (extended ? 'sc-month-wrapper-extended' : '') + ' sc-month-wrapper' },
		_react2.default.createElement(
			'div',
			{
				className: 'sc-month spring-centered-content',
				onClick: function onClick() {
					return selectMonth(month);
				}
			},
			month && month.label
		),
		month.weekdaysShort.map(function (weekday, j) {
			return _react2.default.createElement(
				'div',
				{ className: 'sc-weekday spring-centered-content', key: 'wd' + j },
				weekday
			);
		}),
		month && _react2.default.createElement(_Days2.default, { month: _extends({}, month, { extended: extended }) })
	);
};

exports.default = Month;