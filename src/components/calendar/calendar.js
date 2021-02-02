import { useState, useEffect } from 'react';

import Month from '../month/month';
import { MONTH_NAMES } from '../../CALENDAR_DATA';
import { CalendarContainer } from './calendar.styled';

const Calendar = () => {
	const [monthsData, setMonthsData] = useState([]);

	const fetchFunction = async () => {
		try {
			const apiRes = await fetch(
				'http://staccah.fattureincloud.it/testfrontend/data.json'
			);
			const apiData = await apiRes.json();
			const formattedArray = apiData.mesi.map((itm, idx) => ({
				...itm,
				name: MONTH_NAMES[idx],
				isSelected: false,
			}));
			setMonthsData(formattedArray);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
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

	const selectMonth = month => {
		const setSelectedItem = monthsData.map(itm => {
			if (itm.name === month && itm.isSelected === true) {
				return { ...itm, isSelected: false };
			} else if (itm.name === month) {
				return { ...itm, isSelected: true };
			} else {
				return { ...itm, isSelected: false };
			}
		});
		setMonthsData(setSelectedItem);
	};

	return (
		<CalendarContainer>
			{monthsData.map(month => (
				<Month
					key={month.name}
					month={month}
					percentage={calculatePercentage(month.importo)}
					selectMonth={selectMonth}
				/>
			))}
		</CalendarContainer>
	);
};

export default Calendar;
