import { useState, useEffect } from 'react';

import Month from '../month/month';
import { MONTH_NAMES } from '../../CALENDAR_DATA';
import { CalendarContainer } from './calendar.styled';

const Calendar = () => {
	const [monthsData, setMonthsData] = useState([]);

	useEffect(() => {
		const fetchFunction = async () => {
			const apiRes = await fetch(
				'http://staccah.fattureincloud.it/testfrontend/data.json'
			);
			const apiData = await apiRes.json();
			const formattedArray = apiData.mesi.map((itm, idx) => ({
				...itm,
				nome: MONTH_NAMES[idx],
				isSelected: false,
			}));
			setMonthsData(formattedArray);
		};

		fetchFunction();
	}, []);

	const highestTotal = monthsData.reduce((acc, itm) => {
		if (itm.importo > acc) {
			acc = itm.importo;
		}
		return acc;
	}, 0);

	const calculatePercentage = importo => {
		return ((importo / highestTotal) * 100).toFixed();
	};

	// const refreshSelection = () => {
	// 	const refreshedState = monthsData.map(itm => ({
	// 		...itm,
	// 		isSelected: false,
	// 	}));
	// 	setMonthsData(refreshedState);
	// };

	return (
		<CalendarContainer>
			{monthsData.map(month => (
				<Month
					key={month.nome}
					month={month}
					percentage={calculatePercentage(month.importo)}
					// refreshSelection={refreshSelection}
				/>
			))}
		</CalendarContainer>
	);
};

export default Calendar;
