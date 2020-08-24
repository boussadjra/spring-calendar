"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PrevButton = exports.NextButton = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NextButton = exports.NextButton = function NextButton(_ref) {
	var onClick = _ref.onClick;

	return _react2.default.createElement(
		"button",
		{ className: "spring-btn spring-btn-rounded", onClick: onClick },
		_react2.default.createElement(
			"svg",
			{ fill: "white", x: "0px", y: "0px", width: "20px", height: "20px", viewBox: "0 0 306 306" },
			_react2.default.createElement(
				"g",
				{ id: "chevron-right" },
				_react2.default.createElement("polygon", { points: "94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153" })
			)
		)
	);
};
var PrevButton = exports.PrevButton = function PrevButton(_ref2) {
	var onClick = _ref2.onClick;

	return _react2.default.createElement(
		"button",
		{ className: "spring-btn spring-btn-rounded", onClick: onClick },
		_react2.default.createElement(
			"svg",
			{
				x: "0px",
				fill: "white",
				y: "0px",
				width: "20px",
				height: "20px",
				viewBox: "0 0 306 306",
				style: { transform: 'rotate(180deg)' }
			},
			_react2.default.createElement(
				"g",
				{ id: "chevron-right" },
				_react2.default.createElement("polygon", { points: "94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153" })
			)
		)
	);
};