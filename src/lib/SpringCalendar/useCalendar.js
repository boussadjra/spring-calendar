import moment from 'moment/min/moment-with-locales';

import { useState, useEffect } from 'react';

/****
 *
 *
 *
 */

function useCalendar(thisYear,locale, events) {
	window.moment = moment;
	/***
	 * useState hooooook
	 */

	const [selectedDate, setSelectedDate] = useState({ type: 'year', value: new Date().getFullYear(), default: true });

	/***
	 * useEffect hoook
	 */

	useEffect(() => {
		moment.locale(locale);
		

		changeView('day');
		
	}, []);

	/****
	 *
	 * * functions
	 */

	/**
	 *
	 * @param {*} _year is the year string name like '2020'
	 */
	const generateMonths = _year => {
		return moment.months().map((label, i) => {
			let index = i + 1;

			return getMonth(_year, index, label);
		});
	};
	/** */

	const generateMonth = _date => {
		let index = _date.month() + 1;
		let label = moment.months()[_date.month()];
		let _year = _date.year();

		return getMonth(_year, index, label);
	};
	/******* */
	const getMonth = (_year, index, label) => {
		let fullLabel = `${_year}-${index}`;
		let date = moment(fullLabel);

		let month = { label, fullLabel, index, weekday: date.weekday(), weekdaysShort: moment.weekdaysShort() };

		month.days = [...Array(date.daysInMonth())].map((_, dayIndex) => {
			return getDay({
				index: dayIndex + 1,
				label: `${_year}-${index}-${dayIndex + 1}`,
			});
		});

		return month;
	};

	/** */
	const getDay = day => {
		day.localeFormat = moment(day.label).format('LL');
		day.hours = getHours();
		day.events = getEvents(day);
		day.isToday=moment().isSame(day.label, 'day');
		return day;
	};
	/**
	 *
	 */
	const getEvents = day => {
		let evts = events.filter(event => {
			return moment(event.startDate).isSame(day.label, 'day');
		});

		return evts.map(event => {
			event.startTime = moment(event.startDate).format('hh:mm A');
			event.endTime = moment(event.endDate).format('hh:mm A');
			return event;
		});
	};
	/**
	 *
	 */
	const getHours = () =>
		[...Array(24)].map((x, k) => {
			return {
				index: k,
				label: `${k < 10 ? '0' + k : k}:00`,
			};
		});
	/**
	 *
	 * @param {string} type unit (year, month ...)
	 * @param {date} value the date value
	 * @param {boolean} isDefault the default value is the current date
	 * @param {boolean} toggle the view is changed via a toggle button
	 */
	const changeView = (type, value, isDefault = true, toggle=false) => {
		/**
		 * the following date value by default equals to the current
		 *  year for example 2020-01-01
		 *
		 */
		let date = isDefault ? moment() : moment(value);
		/**
		 * the following condition checking is used when we toggle month or day
		 *  button which should show the current month/day since the default
		 * value refers to the year start
		 */


		date = toggle && !isDefault && !moment().isSame(moment(value), type) ? moment() : date;

		switch (type) {
			case 'day':
				setSelectedDate({
					...selectedDate,
					type: 'day',
					value: date.format('LL'),
					hours: getHours(),
					events: getEvents({ label: date }),
				});
				break;
			case 'week':
				setSelectedDate({ ...selectedDate, type: 'week', value: date.format('MMMM YYYY') });

				break;
			case 'month':
				setSelectedDate({
					...selectedDate,
					type: 'month',
					value: date.format('MMMM YYYY'),
					month: generateMonth(date),
				});

				break;
			case 'year':
				setSelectedDate({
					...selectedDate,
					type: 'year',
					value: date.year().toString(),
					months: generateMonths(date.year()),
				});

				break;
			default:
				break;
		}
	};
	const gotoNext = () => {
		let next = moment(selectedDate.value).add(1, selectedDate.type + 's');
	

		changeView(selectedDate.type, next, false);
	};

	const gotoPrev = () => {
		let prev = moment(selectedDate.value).subtract(1, selectedDate.type + 's');
		changeView(selectedDate.type, prev, false);
	};
	/****
	 *
	 * return hoook methods
	 */
	return {  gotoNext, gotoPrev, selectedDate, changeView };
}

export default useCalendar;
