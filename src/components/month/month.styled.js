import styled from 'styled-components';

export const MonthContainer = styled.div`
	border: 1px solid #ebedee;
	border-bottom: none;
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
	height: 79px;
	border-bottom: 2px solid #0d97d5;
	position: relative;

	.background {
		background: #e0f1eb;
		position: absolute;
		left: 0px;
		right: 0px;
		bottom: 0px;
		height: 80%;
	}
`;
