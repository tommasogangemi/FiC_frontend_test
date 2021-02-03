import {
	MonthContainer,
	MonthNameContainer,
	MonthPreview,
} from './month.styled.js';

const Month = ({ month, percentage, selectMonth }) => {
	const { name, importo, documenti, isSelected } = month;

	const handleClick = () => {
		selectMonth(name);
	};

	return (
		<MonthContainer onClick={handleClick} selected={isSelected}>
			<MonthNameContainer>
				<span>{name}</span>
			</MonthNameContainer>
			<MonthPreview percentage={percentage}>
				<div className='data-container'>
					<span className='docs'>{documenti} doc.</span>
					<span className='total'>{importo} €</span>
				</div>

				<div className='background'></div>
			</MonthPreview>
			<div className='selectBar'></div>
		</MonthContainer>
	);
};

export default Month;
