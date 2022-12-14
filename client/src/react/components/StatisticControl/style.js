import styled from "styled-components";

export const StatisticsControlEl = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;

	@media (max-width: 500px) {
		flex-direction: column;
		align-items: flex-end;
	}
`;

export const InputEl = styled.input`
	width: 40%;
	border-radius: 5px;
	padding: 10px 20px;
	border: 1px solid #000000;

	@media (max-width: 1000px) {
		width: 60%;
	}

	@media (max-width: 800px) {
		width: 100%;
	}
`;

export const LimitSelect = styled.div`
	display: flex;
	align-items: center;
	column-gap: 10px;
	height: 100%;
	font-weight: 500;
	border-radius: 5px;
`;

export const Select = styled.select`
	height: 100%;
	text-align: center;
	font-weight: 500;
	padding: 10px 5px;

	& > option {
		height: 40px;
		text-align: start;
		font-weight: 500;
		padding: 10px 5px;
	}
`;
