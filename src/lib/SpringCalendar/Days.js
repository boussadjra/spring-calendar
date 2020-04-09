import React, { useContext } from 'react';
import CalendarContext from './CalendarContext';
import { useState } from 'react';
const Days = ({ month }) => {
	const { selectDay } = useContext(CalendarContext);
	const [indexDayToShowEvents, setIndexDayToShowEvents] = useState(-1);

	return (
		<>
			{month.weekday > 0 && (
				<div className="sc-day sc-day-in-month" style={{ gridColumnStart: `span ${month.weekday}` }} />
			)}
			{month.days.map((day, dayIndex) => {
				return (
					<div
						key={day.index}
						onClick={event => {
							window.target = event.target;

							if (month.extended) {
								dayIndex === indexDayToShowEvents
									? setIndexDayToShowEvents(-1)
									: setIndexDayToShowEvents(dayIndex);
							} else {
								selectDay(day);
							}
						}}
						className={`${day.isToday ? 'sc-today  spring-centered-content' : ''} sc-day sc-day-in-month`}
					>
						<div>{day.index}</div>
						{day.events.length > 0 && (
							<sup>
								<div className="sc-day-events-count">{day.events.length}</div>
							</sup>
						)}
						{month.extended && day.events.length > 0 && (
							<div className="sc-day-events ">
								{day.events.map(
									(e, i) =>
										i < 3 && (
											<span className="sc-event" key={i}>
												{e.title}
											</span>
										)
								)}
								{day.events.length > 3 && (
									<span className="sc-event-more-indicator">+{day.events.length - 3}</span>
								)}

								{indexDayToShowEvents === dayIndex && day.events.length > 0 && (
									<div className="sc-more-events-wrp">
										<div className="sc-more-events">
											<div className="sc-events-detail">
												<div className="sc-events-detail-day">{day.localeFormat}</div>
												{day.events.map((e, i) => (
													<div className="sc-event-detail" key={i}>
														<div className="sc-event-detail-time" key={i}>
															<div>{e.startTime}</div>
															<div>{e.endTime}</div>
														</div>
														<div className="sc-event-detail-title">{e.title}</div>
													</div>
												))}
											</div>
										</div>
									</div>
								)}
							</div>
						)}
						
					</div>
				);
			})}
		</>
	);
};

export default Days;
