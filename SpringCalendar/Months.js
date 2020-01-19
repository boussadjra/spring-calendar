'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CalendarContext = require('./CalendarContext');

var _CalendarContext2 = _interopRequireDefault(_CalendarContext);

var _Month = require('./Month');

var _Month2 = _interopRequireDefault(_Month);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Months = function Months() {
	var _useContext = (0, _react.useContext)(_CalendarContext2.default),
	    months = _useContext.months;

	return _react2.default.createElement(
		_react2.default.Fragment,
		null,
		months.map(function (month, i) {
			return _react2.default.createElement(_Month2.default, { month: month, key: 'm' + i });
		})
	);
};

exports.default = Months;