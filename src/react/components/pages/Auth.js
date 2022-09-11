import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useStatisticsMutation, useLoginMutation } from "../../store/apiData";
import { authToggle, setStatistics } from "../../store/dataReduser";

export const Auth = () => {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm({
		mode: "onChange",
	});
	const [onLogin, { data: user, error: loginError, isLoading }] =
		useLoginMutation();
	const [getStatistics, { data: statisticData, error: staticticError }] =
		useStatisticsMutation();

	const [error, setError] = useState("");
	// const [apiData, setApiData] = useState({});
	const orderSetting = useSelector(
		(state) => `order=${state.data.order.order}_${state.data.order.val}`
	);
	const offset = useSelector((state) => state.data.offset);
	const limit = useSelector((state) => state.data.limit);

	const dispatch = useDispatch();

	function submitHandler(data) {
		const dataString = new URLSearchParams([
			...Object.entries(data),
		]).toString();

		onLogin(dataString)
			.unwrap()
			.then((user) => {
				dispatch(authToggle(true));
				localStorage.setItem("user", JSON.stringify(user));
				const statisticUrl =
					orderSetting +
					"&" +
					new URLSearchParams([
						...Object.entries({ offset: offset, limit: limit }),
					]).toString();
				const userData = user.token_type + " " + user.access_token;
			})
			.catch((error) => {
				setError(error.data.detail);
				setTimeout(() => {
					setError("");
				}, 2500);
			});
	}

	return (
		<div>
			<h1>Login</h1>
			{error && <div style={{ color: "red" }}>{error}</div>}
			<form onSubmit={handleSubmit(submitHandler)}>
				<label>
					<div>Login</div>
					<input
						type="text"
						placeholder="Login"
						defaultValue=""
						{...register("username")}
						required
						autoComplete="false"
					/>
				</label>
				<label>
					<div>Password</div>
					<input
						type="password"
						placeholder="Password"
						defaultValue=""
						{...register("password")}
						required
						autoComplete="false"
					/>
				</label>
				<input type="submit" value="Login" disabled={isLoading} />
			</form>
			<p>
				Don`t have an account?
				<button
					onClick={() => {
						navigate("../register", { replace: true });
					}}
					disabled={isLoading}
				>
					Sign Up
				</button>
			</p>
		</div>
	);
};
