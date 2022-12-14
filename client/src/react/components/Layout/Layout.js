import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { authToggle, setDefaultState } from "../../store/dataReduser";
import { Header, HeaderLink, HeaderRouterLink, Main } from "./style";

export const Layout = () => {
	const navigate = useNavigate();
	let isAuth = useSelector((state) => state.data.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.hasOwnProperty("user")) {
			navigate("statistics", { replace: true });
		} else navigate("login");
	}, [isAuth]);

	function logoutHandler(e) {
		e.preventDefault();
		dispatch(authToggle(false));
		dispatch(setDefaultState());
		localStorage.removeItem("user");
		navigate("login");
	}
	return (
		<>
			<Header>
				<HeaderLink href="./index.html">JavaScript</HeaderLink>
				{isAuth && (
					<HeaderRouterLink to="login" onClick={logoutHandler}>
						Logout
					</HeaderRouterLink>
				)}
			</Header>
			<Main>
				<Outlet />
			</Main>
		</>
	);
};
