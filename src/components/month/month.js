import {
	MonthContainer,
	MonthNameContainer,
	MonthPreview,
} from './month.styled.js';

const Month = ({ month, percentage }) => {
	const { nome, importo, documenti } = month;

	return (
		<MonthContainer>
			<MonthNameContainer>
				<span>{nome}</span>
			</MonthNameContainer>
			<MonthPreview percentage={percentage}>
				<div className='data-container'>
					<span className='docs'>{documenti} doc.</span>
					<span className='total'>{importo} €</span>
				</div>

				<div className='background'></div>
			</MonthPreview>
		</MonthContainer>
	);
};

export default Month;
