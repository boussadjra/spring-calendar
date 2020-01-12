import React, { useContext } from 'react';
import CalendarContext from './CalendarContext';
import Month from './Month';
const Months = () => {
	const { months } = useContext(CalendarContext);

	return (
		<>
			{months.map((month, i) => {
				return <Month month={month} key={`m${i}`} />;
			})}
		</>
	);
};

export default Months;
