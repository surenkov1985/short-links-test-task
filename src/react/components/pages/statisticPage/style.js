import styled from "styled-components";

export const Title = styled.h1`
	font-size: 30px;
	font-weight: 700;
`;

export const ErrorEl = styled.div`
	width: 400px;
	color: #ff0000;
	border: 1px solid #ff0000;
	padding: 10px 20px;
	border-radius: 5px;
	background: rgba(250, 0, 0, 0.05);
	position: absolute;
	bottom: 150%;

	@media (max-width: 1000px) {
		width: 60%;
	}

	@media (max-width: 800px) {
		width: 100%;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 20px;
	position: relative;
	margin-top: 50px;

	@media (max-width: 768px) {
		margin-top: 35px;
	}
`;

export const Form = styled.form`
	display: flex;
	gap: 10px;
	width: 40%;

	@media (max-width: 1000px) {
		width: 60%;
	}

	@media (max-width: 800px) {
		width: 100%;
	}

	@media (max-width: 500px) {
		flex-direction: column;
	}
`;

export const InputEl = styled.input`
	width: 100%;
	border-radius: 5px;
	padding: 10px 20px;
	border: 1px solid #000000;
`;

export const SubmitEl = styled.input`
	border-radius: 5px;
	padding: 10px 20px;
	background: #ffffff;
	border: 1px solid #000000;
	font-weight: 500;
	cursor: pointer;

	&:hover {
		background: #71aaff;
		color: #ffffff;
		border-color: #71aaff;
	}

	@media (max-width: 500px) {
		width: 100%;
	}
`;
