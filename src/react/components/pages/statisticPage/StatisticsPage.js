import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
	useShortenMutation,
	useStatisticsMutation,
} from "../../../store/apiData";
import { authToggle, setStatistics } from "../../../store/dataReduser";
import { useGetShortenParams } from "../../hooks/useGetShortenParams";
import { useGetStatisticsParams } from "../../hooks/useGetStatisticsParams";
import { Statistics } from "../../statistic/Statistics";
import {
	ErrorEl,
	Form,
	FormContainer,
	InputEl,
	SubmitEl,
	Title,
} from "./style";

export const StatisticsPage = () => {
	const [shortError, setShortError] = useState("");
	const [statisticError, setStatisticError] = useState("");
	const { register, handleSubmit, reset } = useForm({ mode: "onChange" });

	const data = useSelector((state) => state.data.statistics);
	const orderSetting = useSelector((state) => state.data.order);
	const offset = useSelector((state) => state.data.offset);
	const limit = useSelector((state) => state.data.limit);

	const user = JSON.parse(localStorage.getItem("user"));

	const dispatch = useDispatch();

	const { apiData, getApiParams } = useGetStatisticsParams();
	const { getShortenParams, shortenData } = useGetShortenParams();
	const [setShort, { isLoading: shortenLoading }] = useShortenMutation();
	const [getStatistics, { isLoading }] = useStatisticsMutation();

	const shortenSubmit = (data) => {
		getShortenParams(user, data);
	};

	useEffect(() => {
		if (localStorage.hasOwnProperty("user")) {
			dispatch(authToggle(true));
		}
	}, []);

	useEffect(() => {
		shortenData.authData &&
			setShort(shortenData)
				.unwrap()
				.then(() => {
					getStatistics(apiData)
						.unwrap()
						.then((data) => {
							let statisticData = data.map((item) => {
								return {
									...item,
									short: `http://79.143.31.216/s/${item.short}`,
								};
							});
							dispatch(setStatistics(statisticData));
						})
						.catch((error) => {
							setStatisticError(error.detail);
							setTimeout(() => {
								setStatisticError("");
							}, 2500);
						});
					reset();
				})
				.catch((error) => {
					setShortError(error.data.detail[0].msg);
					setTimeout(() => {
						setShortError("");
					}, 2500);
				});
	}, [shortenData]);

	useEffect(() => {
		getApiParams(user, orderSetting, offset, limit);
	}, [orderSetting, offset, limit]);

	useEffect(() => {
		apiData.authData &&
			getStatistics(apiData)
				.unwrap()
				.then((data) => {
					let statisticData = data.map((item) => {
						return {
							...item,
							short: `http://79.143.31.216/s/${item.short}`,
						};
					});
					dispatch(setStatistics(statisticData));
				})
				.catch((error) => {
					setStatisticError(error.detail);
					setTimeout(() => {
						setStatisticError("");
					}, 2500);
				});
	}, [apiData]);

	return (
		<>
			<Title>STATISTICS</Title>
			<FormContainer>
				{shortError && (
					<ErrorEl style={{ color: "red" }}>{shortError}</ErrorEl>
				)}
				<Form onSubmit={handleSubmit(shortenSubmit)}>
					<InputEl
						type="text"
						placeholder="Shorten your link"
						{...register("link")}
					/>
					<SubmitEl
						type="submit"
						value="Shorten"
						disabled={shortenLoading}
					/>
				</Form>
			</FormContainer>
			<Statistics
				data={data}
				statisticError={statisticError}
				isLoading={isLoading}
			/>
		</>
	);
};
