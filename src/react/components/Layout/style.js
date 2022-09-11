import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	padding: 20px 40px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #71aaff;
	box-shadow: 0px 5px 10px 2px rgba(121, 173, 214, 0.22);
	flex-grow: 0;
`;

export const HeaderLink = styled.a`
	font-weight: 500;
	&:hover {
		color: #ffffff;
		text-decoration: underline;
	}
`;

export const HeaderRouterLink = styled(Link)`
	font-weight: 500;
	&:hover {
		color: #ffffff;
		text-decoration: underline;
	}
`;

export const Main = styled.main`
	width: 100%;
	height: 100%;
	padding: 50px 40px;
	display: flex;
	flex-direction: column;
	row-gap: 40px;
	background: #fafafa;
	flex-grow: 1;
`;
