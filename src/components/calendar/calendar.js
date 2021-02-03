import { useState, useEffect } from 'react';
import Month from '../month/month';

import { MONTH_NAMES } from '../../CALENDAR_DATA';

import { CalendarContainer, MonthsDisplay } from './calendar.styled';

const Calendar = () => {
	const [monthsData, setMonthsData] = useState([]);
	const [monthsToDisplay, setMonthsToDisplay] = useState([]);

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

	useEffect(() => {
		const monthSelection = monthsData.filter(itm => itm.isSelected === true);
		setMonthsToDisplay(monthSelection);
	}, [monthsData]);

	const selectMonth = month => {
		const setSelectedItem = monthsData.map(itm => {
			if (itm.name === month) {
				const opposite = !itm.isSelected;
				return { ...itm, isSelected: opposite };
			} else {
				return { ...itm };
			}
		});

		setMonthsData(setSelectedItem);
	};

	const highestTotal = monthsData.reduce((acc, itm) => {
		if (itm.importo > acc) {
			acc = itm.importo;
		}
		return acc;
	}, 0);

	const calculatePercentage = importo => {
		return ((importo / highestTotal) * 100).toFixed();
	};

	return (
		<div>
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
			<MonthsDisplay>
				{monthsToDisplay.map(({ name, importo, documenti }) => (
					<div key={name}>
						<h2>{name}</h2>
						<div>{documenti} doc.</div>
						<div>{importo} €</div>
					</div>
				))}
			</MonthsDisplay>
		</div>
	);
};

export default Calendar;
