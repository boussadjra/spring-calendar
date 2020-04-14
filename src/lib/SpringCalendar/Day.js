import React from 'react';

const Day = ({ day }) => {
	
	return (
		<div className="sc-full-day">
			{day.hours &&
				day.hours.map((hour, index) => {
					return (
						<React.Fragment key={index}>
							<div className="sc-full-day-hour">{hour.label}</div>
							<div className="sc-full-day-time-line-item">
								<div className="sc-full-day-time-line-circle" />
							</div>
						</React.Fragment>
					);
				})}
			{/** render events */}
			<div className="sc-full-day-events">
				{day.events &&
					day.events.map((event, index) => {
						return (
							<div
								key={index}
								style={{
									gridRow:
										new Date(event.startDate).getHours() +
										1 +
										'/span ' +
										(new Date(event.endDate).getHours() - new Date(event.startDate).getHours() + 1),
								}}
								className="sc-full-day-event"
							>
								<div className="sc-full-day-event-time">
									<div>{event.startTime}</div>
									<div>{event.endTime}</div>
								</div>
								<div className="sc-full-day-event-title">{event.title}</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Day;
