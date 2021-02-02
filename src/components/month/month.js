import {
	MonthContainer,
	MonthNameContainer,
	MonthPreview,
} from './month.styled.js';

const Month = () => {
	return (
		<MonthContainer>
			<MonthNameContainer>
				<span>Gennaio</span>
			</MonthNameContainer>
			<MonthPreview>
				<div className='background'></div>
			</MonthPreview>
		</MonthContainer>
	);
};

export default Month;
