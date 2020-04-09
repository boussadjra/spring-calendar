import React, { useEffect, useState } from 'react';
import './style.scss';
import Month from './Month';
import useCalendar from './useCalendar';
import Months from './Months';
import Day from './Day'
import { CalendarProvider } from './CalendarContext';

import { NextButton, PrevButton } from './buttons';
const SpringCalendar = ({ locale, events, color }) => {
	const {  selectedDate, changeView, gotoNext, gotoPrev } = useCalendar('2020',locale,events);
	const [mainContent, setMainContent] = useState('day');
useEffect(() => {
	color?document.documentElement.style.setProperty("--primary", color):document.documentElement.style.setProperty("--primary", "#5118ac");

}, [color])

	useEffect(() => {
		setMainContent(selectedDate.type);
	}, [selectedDate]);

	const DYNAMIC_CONTENT = {
		year: (
			<Months
				months={selectedDate.months ? selectedDate.months : []}
			
			/>
		),
		month: (
			<Month
				extended
				month={selectedDate.month ? selectedDate.month : null}
			
			/>
		),
		day:<Day day={selectedDate} />
	};
/***
 * * functions
 */
	const selectMonth=month => {
		changeView('month', month.fullLabel, false);
	}

	/**** */
	const selectDay=day => {
		changeView('day', day.label, false);
	}
	/**
	 * JSX template
	 */
	return (
		<CalendarProvider value={{ selectMonth,selectDay}}>

		<div className="sc-wrapper">
			<div className="sc-year-wrapper">
				<div
					className={`sc-year ${
						selectedDate.type !== 'year' ? 'sc-month-year' : ''
					}`}
				>
					<PrevButton onClick={() => gotoPrev()} />
					<h2>{selectedDate.value}</h2>
					<NextButton onClick={() => gotoNext()} />
				</div>
				<div className="sc-toggle">
					<div
						onClick={() => changeView('day',selectedDate.value,false,true)}
						className={`spring-button ${selectedDate.type === 'day' ? 'spring-button-active' : ''}`}
					>
						Day
					</div>

					{/* <div
						onClick={() => changeView('week',selectedDate.value,false,true)}
						className={`spring-button ${selectedDate.type === 'week' ? 'spring-button-active' : ''}`}
					>
						Week
					</div> */}
					<div
						onClick={() => changeView('month',selectedDate.value,false,true)}
						className={`spring-button ${selectedDate.type === 'month' ? 'spring-button-active' : ''}`}
					>
						Month
					</div>
					<div
						onClick={() => changeView('year',selectedDate.value,false,true)}
						className={`spring-button ${selectedDate.type === 'year' ? 'spring-button-active' : ''}`}
					>
						Year
					</div>
				</div>
			</div>
			<div className="spring-main-content">{DYNAMIC_CONTENT[mainContent]}</div>
		</div>
		</CalendarProvider>
	);
};

export default SpringCalendar;
