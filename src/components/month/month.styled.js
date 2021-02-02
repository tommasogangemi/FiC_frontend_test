import styled from 'styled-components';

export const MonthContainer = styled.div`
	border: 1px solid #ebedee;
	border-left: none;
	border-bottom: none;
	cursor: pointer;

	&:first-child {
		border-left: 1px solid #ebedee;
	}
`;

export const MonthNameContainer = styled.div`
	position: relative;
	width: 80px;
	height: 30px;
	border-bottom: 1px solid #ebedee;

	span {
		position: absolute;
		height: 18px;
		left: 8px;
		right: 0px;
		top: 7px;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
		display: flex;
		align-items: center;
		color: #0d97d5;
	}
`;

export const MonthPreview = styled.div`
	height: 75px;
	margin-top: 4px;
	border-bottom: ${props =>
		props.selected ? '4px solid #00875A' : '2px solid #0d97d5'};
	position: relative;

	.data-container {
		position: absolute;
		left: 8px;
		right: 8px;
		bottom: 7px;

		.docs,
		.total {
			font-family: Inter;
			font-size: 12px;
			line-height: 18px;
			display: flex;
			align-items: center;
		}

		.docs {
			font-weight: 400;
			color: #6f7e86;
		}

		.total {
			font-weight: 500;
			color: #00875a;
		}
	}

	.background {
		z-index: -1;
		background: #e0f1eb;
		position: absolute;
		left: 0px;
		right: 0px;
		bottom: 0px;
		height: ${props => props.percentage}%;
	}
`;
