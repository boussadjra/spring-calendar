'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarConsumer = exports.CalendarProvider = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalendarContext = _react2.default.createContext({});

var CalendarProvider = exports.CalendarProvider = CalendarContext.Provider;
var CalendarConsumer = exports.CalendarConsumer = CalendarContext.Consumer;
exports.default = CalendarContext;