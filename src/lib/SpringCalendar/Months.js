import React from 'react';
import Month from './Month';
const Months = ({months}) => {
	return (
		<React.Fragment>
			{months.map((month, i) => {
				return <Month month={month}  key={`m${i}`} />;
			})}
		</React.Fragment>
	);
};

export default Months;
