import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../store/apiData";
import { authToggle } from "../../store/dataReduser";

export const Auth = () => {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm({
		mode: "onChange",
	});
	const [onLogin, { data: user, error: loginError }] = useLoginMutation();

	const [error, setError] = useState("");

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
				<input type="submit" value="Login" />
			</form>
			<p>
				Don`t have an account?
				<button
					onClick={() => {
						navigate("../register", { replace: true });
					}}
				>
					Sign Up
				</button>
			</p>
		</div>
	);
};
