import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { authToggle } from "../store/dataReduser";

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
		localStorage.removeItem("user");
		navigate("login");
	}
	return (
		<div>
			<header>
				<a href="../">JavaScript</a>
				<Link to="login" onClick={logoutHandler}>
					Logout
				</Link>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};
