import styled from "styled-components";

export const Title = styled.h1`
	font-size: 30px;
	font-weight: 700;
`;

export const FormContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	row-gap: 30px;
	flex-grow: 1;
`;

export const Form = styled.form`
	width: 500px;
	display: flex;
	flex-direction: column;
	row-gap: 30px;
	margin-top: 60px;
	position: relative;
`;
export const LoginErrorEl = styled.div`
	width: 500px;
	color: #ff0000;
	border: 1px solid #ff0000;
	padding: 10px 20px;
	border-radius: 5px;
	background: rgba(250, 0, 0, 0.05);
	position: absolute;
	top: -60px;
`;

export const Label = styled.label`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 10px;
	font-weight: 500;
`;
export const InputTitle = styled.div`
	font-size: 18px;
	font-weight: 500;
`;

export const Input = styled.input`
	padding: 10px 20px;
`;

export const NavigateEl = styled.div`
	font-weight: 500;
`;

export const NavigateBtn = styled.button`
	border: none;
	background: none;
	cursor: pointer;
	color: blue;
	margin-left: 10px;

	&:hover {
		color: blue;
		text-decoration: underline;
	}
`;
