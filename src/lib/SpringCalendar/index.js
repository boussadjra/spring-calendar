import React, { useEffect, useState } from 'react';
import './style.scss';
import Month from './Month';
import useCalendar from './useCalendar';
import Months from './Months';
import Day from './Day';
import Week from './Week';
import { CalendarProvider } from './CalendarContext';

import { NextButton, PrevButton } from './buttons';
const SpringCalendar = ({ locale, events, color ,defaultType}) => {
const colors=["#004D40", "#00695C", "#2e003e", "#3d2352", "#05386B", "#379683", "#022140", "#265077", "#0c0023", "#190061", "#38003c", "#e90052", "#330136", "#5E1742", "#191226", "#F2355B", "#702C8E", "#ED1651", "#2A4C59", "#A62D43", "#103754", "#D53D13", "#332851", "#CA3074", "#2D4057", "#4097AA", "#214D72", "#2C7695", "#071E22", "#EE2E31", "#434858", "#FC6453", "#651e3e", "#851e3e", "#0072ff", "#00c6ff", "#34495e", "#41b883", "#2b2d5c", "#3465d8", "#323E40", "#D97D0D", "#1D1D2C", "#E40C2B", "#1D1D2C", "#C3002F", "#306073", "#F2385A", "#0f256e", "#01a168", "#05004E", "#fd5f00", "#3e1063", "#401372", "#2F2440", "#BA0F30"]
let coloredEvents=events.map(event=>{
	event.color=event.color?event.color:colors[Math.round(Math.random()*56)-1];
	return event;
  })
	const { selectedDate, changeView, gotoNext, gotoPrev } = useCalendar('2020', locale, coloredEvents,defaultType);
	const [mainContent, setMainContent] = useState('day');
	useEffect(() => {
		color
			? document.documentElement.style.setProperty('--primary', color)
			: document.documentElement.style.setProperty('--primary', '#5118ac');
	}, [color]);

	useEffect(() => {
		setMainContent(selectedDate.type);
	}, [selectedDate]);

	const DYNAMIC_CONTENT = {
		year: <Months months={selectedDate.months ? selectedDate.months : []} />,
		month: <Month extended month={selectedDate.month ? selectedDate.month : null} />,
	week:<Week  week={selectedDate.week ? selectedDate.week : null} />,
		day: <Day day={selectedDate} />,
	};
	/***
	 * * functions
	 */
	const selectMonth = month => {
		changeView('month', month.fullLabel, false);
	};

	/**** */
	const selectDay = day => {
		changeView('day', day.label, false);
	};
	/**
	 * JSX template
	 */
	return (
		<CalendarProvider value={{ selectMonth, selectDay }}>
			<div className="sc-wrapper">
				<div className="sc-year-wrapper">
					<div className={`sc-year ${selectedDate.type !== 'year' ? 'sc-month-year' : ''}`}>
						<PrevButton onClick={() => gotoPrev()} />
						<h2>{selectedDate.value}</h2>
						<NextButton onClick={() => gotoNext()} />
					</div>
					<div className="sc-toggle">
						<div
							onClick={() => changeView('day', selectedDate.value, false, true)}
							className={`spring-button ${selectedDate.type === 'day' ? 'spring-button-active' : ''}`}
						>
							Day
						</div>

					 <div
						onClick={() => changeView('week',selectedDate.value,false,true)}
						className={`spring-button ${selectedDate.type === 'week' ? 'spring-button-active' : ''}`}
					>
						Week
					</div> 
						<div
							onClick={() => changeView('month', selectedDate.value, false, true)}
							className={`spring-button ${selectedDate.type === 'month' ? 'spring-button-active' : ''}`}
						>
							Month
						</div>
						<div
							onClick={() => changeView('year', selectedDate.value, false, true)}
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
