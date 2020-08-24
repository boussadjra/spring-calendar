"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Day = function Day(_ref) {
	var day = _ref.day;


	return _react2.default.createElement(
		"div",
		{ className: "sc-full-day" },
		day.hours && day.hours.map(function (hour, index) {
			return _react2.default.createElement(
				_react2.default.Fragment,
				{ key: index },
				_react2.default.createElement(
					"div",
					{ className: "sc-full-day-hour" },
					hour.label
				),
				_react2.default.createElement(
					"div",
					{ className: "sc-full-day-time-line-item" },
					_react2.default.createElement("div", { className: "sc-full-day-time-line-circle" })
				)
			);
		}),
		_react2.default.createElement(
			"div",
			{ className: "sc-full-day-events" },
			day.events && day.events.map(function (event, index) {
				return _react2.default.createElement(
					"div",
					{
						key: index,
						style: {
							gridRow: new Date(event.startDate).getHours() + 1 + '/span ' + (new Date(event.endDate).getHours() - new Date(event.startDate).getHours() + 1)
						},
						className: "sc-full-day-event"
					},
					_react2.default.createElement(
						"div",
						{ className: "sc-full-day-event-time" },
						_react2.default.createElement(
							"div",
							null,
							event.startTime
						),
						_react2.default.createElement(
							"div",
							null,
							event.endTime
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "sc-full-day-event-title" },
						event.title
					)
				);
			})
		)
	);
};

exports.default = Day;