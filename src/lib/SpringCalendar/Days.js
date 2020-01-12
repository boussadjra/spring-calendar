import React, { useContext } from 'react';
import CalendarContext from './CalendarContext';

const Days = ({ month }) => {
	const { moment, year, events, setSelectedDay } = useContext(CalendarContext);

	let startDay = moment(`${year}-${month + 1}`)
		.startOf('month')
		.day();
	let endDay = moment(`${year}-${month + 1}`)
		.endOf('month')
		.day();
	let daysOfMonth = [...Array(moment(`${year}-${month + 1}`).daysInMonth())].map((x, k) => {
		return {
			dayIndex: k + 1,
			belongsToThisMonth: true,
		};
	});

	let prevMonthCountDays =
		month > 0 ? moment(`${year}-${month}`).daysInMonth() : moment(`${year - 1}-12`).daysInMonth();

	for (let index = 0; index < startDay; index++) {
		daysOfMonth.unshift({
			dayIndex: prevMonthCountDays,
			belongsToThisMonth: false,
		});
		prevMonthCountDays--;
	}
	for (let index = 1; index <= 6 - endDay; index++) {
		daysOfMonth.push({
			dayIndex: index,
			belongsToThisMonth: false,
		});
	}

	return daysOfMonth.map((dm, i) => {
		let fullDayString = `${year}-${month + 1}-${dm.dayIndex}`;
		let isToday = moment().isSame(fullDayString, 'day');

		let day = {
			index: dm.dayIndex,
			month: month + 1,
			year: year,
			fullDayString,
		};
		let evts = events.filter(event => {
			if (moment(event.startDate).isSame(day.fullDayString, 'day')) {
				return event;
			}
		});
		return (
			<div
				onClick={() => setSelectedDay(day)}
				key={`dm${dm}${i}`}
				className={`spring-calendar-day ${
					dm.belongsToThisMonth ? 'spring-calendar-day-in-month' : 'spring-calendar-day-out-month'
				} 
            `}
			>
				<div className={`${isToday ? 'spring-calendar-today  spring-centered-content': ''}  spring-centered-content'`}>
					<span>{dm.dayIndex}</span>
					{evts.length>0 && <sup >
						<div className="spring-calendar-day-events">
						{ evts.length}
						</div>
						</sup>}
				</div>
			</div>
		);
	});
};

export default Days;
