import React,{ useContext } from 'react';
import Days from './Days';
import CalendarContext from './CalendarContext';


const Month = ({ extended,month }) => {
    const {selectMonth}=useContext(CalendarContext)

	return (
		<div className={`${extended?'sc-month-wrapper-extended':'' } sc-month-wrapper`}>
			<div
				className="sc-month spring-centered-content"
				onClick={()=>selectMonth(month)}
			>
				{month && month.label}
			</div>
			{month.weekdaysShort.map((weekday, j) => {
				return (
					<div className="sc-weekday spring-centered-content" key={`wd${j}`}>
						{weekday}
					</div>
				);
			})}
			{month && <Days month={{...month,extended}} />}
		</div>
	);
};

export default Month;
