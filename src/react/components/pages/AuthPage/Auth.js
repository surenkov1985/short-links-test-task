import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../../store/apiData";
import { authToggle } from "../../../store/dataReduser";
import { InputEl, SubmitEl } from "../StatisticPage/style";
import {
	Form,
	FormContainer,
	InputTitle,
	Label,
	LoginErrorEl,
	NavigateBtn,
	NavigateEl,
	Title,
} from "./style";

export const Auth = () => {
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm({
		mode: "onChange",
	});
	const [onLogin, { isLoading }] = useLoginMutation();

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
		<>
			<Title>Login</Title>
			<FormContainer>
				<Form onSubmit={handleSubmit(submitHandler)}>
					{error && (
						<LoginErrorEl style={{ color: "red" }}>
							{error}
						</LoginErrorEl>
					)}
					<Label>
						<InputTitle>Login</InputTitle>
						<InputEl
							type="text"
							placeholder="Login"
							defaultValue=""
							{...register("username")}
							required
							autoComplete="false"
						/>
					</Label>
					<Label>
						<InputTitle>Password</InputTitle>
						<InputEl
							type="password"
							placeholder="Password"
							defaultValue=""
							{...register("password")}
							required
							autoComplete="false"
						/>
					</Label>
					<SubmitEl
						type="submit"
						value="Login"
						disabled={isLoading}
					/>
				</Form>
				<NavigateEl>
					Don`t have an account?
					<NavigateBtn
						onClick={() => {
							navigate("../register", { replace: true });
						}}
						disabled={isLoading}
					>
						Sign Up
					</NavigateBtn>
				</NavigateEl>
			</FormContainer>
		</>
	);
};
