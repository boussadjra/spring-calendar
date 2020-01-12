import React,{useContext} from 'react';
import Days from './Days';
import CalendarContext from './CalendarContext';


const Month = ({ month,extended }) => {
    const {moment,setSelectedMonth}=useContext(CalendarContext)

	return (
		<div className={`  ${extended?'spring-calendar-month-wrapper-extended':'' } spring-calendar-month-wrapper `}>
			<div
				className="spring-calendar-month spring-centered-content"
				onClick={() => extended?setSelectedMonth(null):setSelectedMonth(month) }
			>
				{month && month.label}
			</div>
			{moment.weekdaysShort().map((weekday, j) => {
				return (
					<div className="spring-calendar-weekday spring-centered-content" key={`wd${j}`}>
						{weekday}
					</div>
				);
			})}
		{month &&	<Days month={month.index} />}
		</div>
	);
};

export default Month;
