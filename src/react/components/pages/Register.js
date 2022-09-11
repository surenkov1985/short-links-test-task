import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "../../store/apiData";
import { authToggle } from "../../store/dataReduser";

export const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [error, setError] = useState("");
	const [
		onRegister,
		{ data: registerData, error: registerError, isLoading },
	] = useRegisterMutation();
	const [onlogin, { data: loginData, error: loginError }] =
		useLoginMutation();
	const { register, handleSubmit } = useForm({ mode: "onCange" });

	function submitHandler(data) {
		const dataString = new URLSearchParams([
			...Object.entries(data),
		]).toString();

		onRegister(dataString, JSON.stringify(data))
			.unwrap()
			.then(() => {
				onlogin(dataString)
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
			})
			.catch((error) => {
				setError(error.data.detail);
				setTimeout(() => {
					setError("");
				}, 2500);
			});
		console.log(data);
	}

	return (
		<div>
			<h1>Register</h1>
			{error && <div style={{ color: "red" }}>{error}</div>}
			<form onSubmit={handleSubmit(submitHandler)}>
				<label>
					<div>Login</div>
					<input
						type="text"
						placeholder="Login"
						required
						autoComplete="false"
						{...register("username")}
					/>
				</label>
				<label>
					<div>Password</div>
					<input
						type="password"
						placeholder="Password"
						required
						autoComplete="false"
						{...register("password")}
					/>
				</label>
				<input type="submit" value="Logout" disabled={isLoading} />
			</form>
			<p>
				Have an account?{" "}
				<button
					onClick={() => {
						navigate("../login");
					}}
					disabled={isLoading}
				>
					Sign In
				</button>
			</p>
		</div>
	);
};
