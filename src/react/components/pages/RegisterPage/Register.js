import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "../../../store/apiData";
import { authToggle } from "../../../store/dataReduser";
import {
	Form,
	FormContainer,
	Input,
	InputTitle,
	Label,
	LoginErrorEl,
	NavigateBtn,
	NavigateEl,
} from "../AuthPage/style";
import { SubmitEl } from "../StatisticPage/style";
import { Title } from "./style";

export const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [error, setError] = useState("");
	const [
		onRegister,
		{ isLoading },
	] = useRegisterMutation();
	const [onlogin] =
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
		<>
			<Title>Register</Title>
			<FormContainer>
				<Form onSubmit={handleSubmit(submitHandler)}>
					{error && (
						<LoginErrorEl style={{ color: "red" }}>
							{error}
						</LoginErrorEl>
					)}
					<Label>
						<InputTitle>Login</InputTitle>
						<Input
							type="text"
							placeholder="Login"
							required
							autoComplete="sername"
							{...register("username")}
						/>
					</Label>
					<Label>
						<InputTitle>Password</InputTitle>
						<Input
							type="password"
							placeholder="Password"
							required
							autoComplete="current-password"
							{...register("password")}
						/>
					</Label>
					<SubmitEl
						type="submit"
						value="Signup"
						disabled={isLoading}
					/>
				</Form>
				<NavigateEl>
					Have an account?{" "}
					<NavigateBtn
						onClick={() => {
							navigate("../login");
						}}
						disabled={isLoading}
					>
						Sign In
					</NavigateBtn>
				</NavigateEl>
			</FormContainer>
		</>
	);
};
