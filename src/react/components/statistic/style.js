import styled from "styled-components";

export const StatisticContainer = styled.div`
	width: 100%;
	max-height: 400px;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	position: relative;
	margin-top: 35px;
	border: 1px solid #000000;
	border-radius: 5px;
`;

export const StatisticHeader = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	background: #71aaff;
	border-bottom: 1px solid #000000;
	position: sticky;
	top: 0;
	flex-grow: 0;
	z-index: 2;
`;

export const TargetEl = styled.div`
	width: 55%;
	padding: 10px 20px;
	border-right: 1px solid #000000;
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > span {
		font-weight: 500;
	}
`;

export const ShortEl = styled.div`
	width: 35%;
	padding: 10px 20px;
	border-right: 1px solid #000000;
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > span {
		font-weight: 500;
	}
`;

export const CounterEl = styled.div`
	width: 10%;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > span {
		font-weight: 500;
	}
`;
export const StatisticItem = styled.li`
	width: 100%;
	display: flex;
	align-items: center;

	&:not(:last-child) {
		border-bottom: 1px solid #000000;
	}
`;

export const SortControl = styled.button`
	width: 30px;
	background: none;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&:hover > svg path {
		fill: #ffffff;
	}

	&:disabled > svg {
		opacity: 0.5;
	}
`;

export const StatisticList = styled.ul`
	flex-grow: 1;
`;

export const ShortLink = styled.a`
	text-decoration: underline;
	cursor: pointer;

	&:hover {
		color: blue;
	}
`;

export const ShortCopiedBtn = styled.button`
	border: none;
	background: none;
	cursor: pointer;

	&:hover {
		color: blue;
	}
`;

export const OffsetControl = styled.div`
	display: flex;
	column-gap: 10px;
`;

export const OffsetControlBtn = styled.button`
	border-radius: 5px;
	padding: 10px 20px;
	background: #ffffff;
	border: 1px solid #000000;
	font-weight: 500;
	cursor: pointer;
	display: flex;
	align-items: center;
	column-gap: 5px;

	&:hover {
		background: #71aaff;
		color: #ffffff;
		border-color: #71aaff;

		& > svg path {
			fill: #ffffff;
		}
	}

	&:disabled {
		opacity: 0.5;

		&:hover {
			cursor: default;
			background: #ffffff;
			color: #000000;
			border: 1px solid #000000;
			& > svg path {
				fill: #000000;
			}
		}
	}
`;

export const ShortCopiedEl = styled.div`
	position: absolute;
	padding: 5px 10px;
	background: #e6f0f7;
	border-radius: 4px;
	z-index: 3;
	white-space: nowrap;
	transform: translate(-100%, -100%);
	top: ${(props) => props.top};
	left: ${(props) => props.left};
`;
