import React, { useContext, useEffect, useState } from 'react';
import CalendarContext from './CalendarContext';

const Hours = ({ day }) => {
	const { events, moment,year,selectedMonth } = useContext(CalendarContext);

	const [customEvents, setCustomEvents] = useState([]);
console.log(selectedMonth)
	/****
	 *
	 */
	useEffect(() => {
		let e = events.filter(event => {
			if (moment(event.startDate).isSame(day.fullDayString, 'day')) {
				return event;
			}
			return null;
		});
		let gridColumnStart = 3;
		let ev = e.map(event => {
			let tmp = {
				title: event.title,
				startDate: moment(event.startDate),
				endDate: moment(event.endDate),
				style: {},
			};

			tmp.style.gridRowStart = tmp.startDate.hour() + 1;
			tmp.style.height = `${(tmp.endDate.hour() - tmp.startDate.hour()) * 48 + 4}px`;
			return tmp;
		});
		ev = ev.map((event, i) => {
			let k = 0;
			while (k < i) {
				if (
					(event.startDate.hour() >= ev[k].startDate.hour() &&
						event.startDate.hour() <= ev[k].endDate.hour()) ||
					(ev[k].startDate.hour() >= event.startDate.hour() && ev[k].startDate.hour() <= event.endDate.hour())
				) {
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
	const dayHours = [...Array(24)].map((x, k) => {
		return {
			index: k,
			label: `${k < 10 ? '0' + k : k}:00`,
		};
	});
	/**
	 *
	 * JSX template
	 */
	return (
		<div className="spring-calendar-hours-wrapper">
			{dayHours.map((hour, i) => {
				return (
					<div key={`h${i}`} className="spring-calendar-hour">
						{hour.label}
					</div>
				);
			})}

			{/* {customEvents.map((event, k) => {
				return (
					<div key={`e${k}`} style={event.style} className="spring-calendar-event">
						{event.title}
					</div>
				);
			})} */}
		</div>
	);
};

export default Hours;
