import React, { useEffect, useState } from 'react';

const Week = ({ week }) => {
	const [mappedEvents, setMappedEvents] = useState([]);
	const [events, setEvents] = useState([]);

	const [focusedEvent, setFocusedEvent] = useState({});

	useEffect(() => {
		let _events = week.weekdays
			.map(wd => wd.events)
			.flat()
			.sort((a, b) => {
				return new Date(a.startDate).getHours() - new Date(b.startDate).getHours();
			})
			.map((event, i) => {
				let startHour = new Date(event.startDate).getHours();
				let endHour = new Date(event.endDate).getHours();
				let endMinutes = new Date(event.endDate).getMinutes();

				event.style = {
					/*'grid-row': startHour + 1 + '/span ' + (endHour - startHour + 1),

					'grid-column': event.weekday + 1,*/
					// "z-index": startHour + 1,
					background: event.color,
					height: (endHour - startHour) * 32 + (32 * endMinutes) / 60 + 'px',
				};

				return event;
			});

		setEvents(_events);
	}, [week]);

	useEffect(() => {
		function getEventsByHour(hour, day) {
			console.log('--------------------');
			console.log(events);
			console.log('--------------------');
			let _events = events.filter(e => {
				let startHour = new Date(e.startDate).getHours();
				return startHour === hour && day === e.weekday;
			});

			return _events.map((e, i) => {
				e.style.left = (i / _events.length) * 90 + '%';
				e.style.top = '0px';
				return e;
			});
		}
		let _mappedEvents = [];

		if (events.length > 0) {
			for (let h = 1; h <= 24; h++) {
				for (let j = 0; j < 7; j++) {
					let filteredEvents = getEventsByHour(h, j);

					_mappedEvents.push(filteredEvents);
				}
			}
		}

		setMappedEvents(_mappedEvents);
	}, [events]);

	const focusOnEvent = event => {
		setFocusedEvent(event);
	};
	return (
		<div className="sc-week-wrapper">
			<div className="sc-weekdays">
				{week.weekdays.map((weekday, j) => {
					return (
						<div className="sc-weekday" key={'fwd' + j}>
							<div className="sc-weekday-label">{weekday.label}</div>
							<div className="sc-weekday-date">{weekday.date}</div>
						</div>
					);
				})}
			</div>
			<div className="sc-week-hours-wrap">
				<div className="sc-week-hours">
					{week.hours.map((hour, index) => {
						return (
							<div key={'wh' + index} className="sc-week-hour">
								{hour.label}
							</div>
						);
					})}
				</div>
			</div>
			<div className="sc-week-events-wrap">
				{mappedEvents.map((event, index) => {
					return (
						<div key={'we' + index} className="sc-week-events">
							{event.map((item, i) => {
								return (
									<div
										key={'evdd' + i + index}
										style={{ ...item.style }}
										className={`${
											item.title === focusedEvent.title ? 'sc-week-event-focused' : ''
										} sc-week-event`}
										onClick={() => focusOnEvent(item)}
									>
										{item.title === focusedEvent.title ? (
											<>
												<div className="sc-week-event-time">
													<div>{item.startTime}</div>
													<div>{item.endTime}</div>
												</div>
												<div className="sc-week-event-title">{item.title}</div>
											</>
										) : (
											<div className="sc-week-event-title">{item.title}</div>
										)}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Week;
