import React, { useEffect, useState } from 'react';
import './style.scss';
import moment from 'moment/min/moment-with-locales';
//import { useSelector } from 'react-redux';
import Months from './Months';
import Month from './Month';
import { CalendarProvider } from './CalendarContext';
import Hours from './Hours';

const SpringCalendar = ({ locale, events ,color}) => {

	window.moment=moment;
	const [year, setYear] = useState(2020);
	const [months, setMonths] = useState(
		moment.months().map((label, index) => {
			return { label, index };
		})
	);
	const [mainContent, setMainContent] = useState('months');
	const [headerContent, setHeaderContent] = useState('year');
	const [selectedMonth, setSelectedMonth] = useState(null);
	const [selectedDay, setSelectedDay] = useState(null);
	//	const locale = useSelector(state => state.locale);

	//window.moment = moment;
	/**
	 *
	 * useEffect hooooooook
	 */
	useEffect(() => {
		document.documentElement.style.setProperty("--primary", color);
		setMonths(
			moment.months().map((label, index) => {
				return { label, index };
			})
		);
	}, [locale,color]);
	/********** */
	useEffect(() => {
		if (selectedMonth) {
			setMainContent('month');
			setHeaderContent('month');
		} else {
			setMainContent('months');
		}
	}, [selectedMonth]);
	/** */

	useEffect(() => {
		if (selectedDay !== null) {
			setMainContent('hours');
			setHeaderContent('day');
		}
	}, [selectedDay]);
	/**
	 * functions and constants
	 */

	const DYNAMIC_CONTENT = {
		months: <Months />,
		month: <Month month={selectedMonth} extended={selectedMonth !== null} />,
		hours: <Hours day={selectedDay} />,
	};

	const HEADER_CONTENT = {
		year: <h2>{year}</h2>,
		month:
			selectedMonth !== null ? <h2>{moment(`${year}-${selectedMonth.index + 1}`).format('MMMM YYYY')}</h2> : null,
		day: selectedDay !== null ? <h2>{moment(selectedDay.fullDayString).format('LL')}</h2> : null,
	};
	/******* */

	const gotoPrev = () => {
		switch (headerContent) {
			case 'year':
				let y = year - 1;
				setYear(y);
				break;
			case 'month':
				let prevMonth = moment(`${year}-${selectedMonth.index + 1}`).subtract(1, 'months');
				setYear(prevMonth.year());
				let index = prevMonth.month();
				setSelectedMonth({ index: index, label: moment.months()[index] });

				break;
			case 'day':
				let prevDay = moment(selectedDay.fullDayString).subtract(1, 'days');
				setYear(prevDay.year());

				setSelectedMonth({ index: prevDay.month() + 1, label: moment.months()[prevDay.month()] });

				setSelectedDay({
					index: prevDay.date(),
					month: prevDay.month() + 1,
					year: prevDay.year(),
					fullDayString: `${year}-${prevDay.month() + 1}-${prevDay.date()}`,
				});

				break;
			default:
				break;
		}
	};

	const gotoNext = () => {
		switch (headerContent) {
			case 'year':
				let y = year + 1;
				setYear(y);
				break;
			case 'month':
				let nextMonth = moment(`${year}-${selectedMonth.index + 1}`).add(1, 'months');
				setYear(nextMonth.year());
				let index = nextMonth.month();
				setSelectedMonth({ index: index, label: moment.months()[index] });

				break;
			case 'day':
				let nextDay = moment(selectedDay.fullDayString).add(1, 'days');

				setYear(nextDay.year());
				//let d = nextDay.toDate();
				setSelectedMonth({ index: nextDay.month() + 1, label: moment.months()[nextDay.month()] });

				setSelectedDay({
					index: nextDay.date(),
					month: nextDay.month() + 1,
					year: nextDay.year(),
					fullDayString: `${year}-${nextDay.month() + 1}-${nextDay.date()}`,
				});

				break;
			default:
				break;
		}
	};
	/*** */

	const selectMonth = () => {
		setHeaderContent('month');
		setMainContent('month');
		let index = moment().month();
		selectedMonth ? setSelectedMonth(null) : setSelectedMonth({ index: index, label: moment.months()[index] });
	};

	const selectYear = () => {
		setHeaderContent('year');
		setMainContent('months');
		setYear(moment().year());
	};

	const selectDay = () => {
		setHeaderContent('day');
		setSelectedDay({ fullDayString: moment().format('YYYY-MM-DD') });
	};
	/**
	 * JSX template
	 */
	return (
		<CalendarProvider value={{ moment, year, months, events,selectedMonth ,setSelectedMonth ,setSelectedDay }}>
			<div className="spring-calendar-wrapper">
				<div className="spring-calendar-year-wrapper">
					<div
						className={`spring-calendar-year ${
							selectedMonth || selectedDay ? 'spring-calendar-month-year' : ''
						}`}
					>
						<PrevButton onClick={() => gotoPrev()} />
						{HEADER_CONTENT[headerContent]}
						<NextButton onClick={() => gotoNext()} />
					</div>

					<div className="spring-calendar-toggle">
						<div
							onClick={() => selectDay()}
							className={`spring-button ${headerContent === 'day' ? 'spring-button-active' : ''}`}
						>
							Day
						</div>
						<div
							onClick={() => selectMonth()}
							className={`spring-button ${headerContent === 'month' ? 'spring-button-active' : ''}`}
						>
							Month
						</div>
						<div
							onClick={() => selectYear()}
							className={`spring-button ${headerContent === 'year' ? 'spring-button-active' : ''}`}
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

const NextButton = ({ onClick }) => {
	return (
		<button className="spring-btn spring-btn-rounded" onClick={onClick}>
			<svg fill="white" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 306 306">
				<g id="chevron-right">
					<polygon points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153" />
				</g>
			</svg>
		</button>
	);
};

const PrevButton = ({ onClick }) => {
	return (
		<button className="spring-btn spring-btn-rounded" onClick={onClick}>
			<svg
				x="0px"
				fill="white"
				y="0px"
				width="20px"
				height="20px"
				viewBox="0 0 306 306"
				style={{ transform: 'rotate(180deg)' }}
			>
				<g id="chevron-right">
					<polygon points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153" />
				</g>
			</svg>
		</button>
	);
};

export default SpringCalendar;
