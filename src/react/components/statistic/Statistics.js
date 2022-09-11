import React, { useEffect, useState } from "react";
import {
	AiFillCaretDown,
	AiFillCaretUp,
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
	decOffset,
	incOffset,
	limitItemToggle,
	orderToggle,
} from "../../store/dataReduser";
import { ErrorEl, SubmitEl } from "../pages/statisticPage/style";
import { StatisticsControl } from "../statisticControl/StatisticControl";
import {
	CounterEl,
	OffsetControl,
	OffsetControlBtn,
	ShoortCopiedBtn,
	ShortEl,
	ShortLink,
	SortControl,
	StatisticContainer,
	StatisticHeader,
	StatisticItem,
	StatisticList,
	TargetEl,
} from "./style";

export const Statistics = ({ data, statisticError, isLoading }) => {
	const [statisticData, setStatisticData] = useState(data);
	const [filterValue, setFilterValue] = useState("");
	const [reg, setReg] = useState(new RegExp(filterValue, "i"));
	const offset = useSelector((state) => state.data.offset);
	const limit = useSelector((state) => state.data.limit);
	const [targetOrder, setTargetOrder] = useState("asc");
	const [shortOrder, setShortOrder] = useState("asc");
	const [counterOrder, setCounterOrder] = useState("asc");
	const [copyText, setCopyText] = useState("");
	const [copiedId, setCopiedId] = useState(null);

	const dispatch = useDispatch();

	const filterHandler = (e) => {
		setFilterValue(e.target.value);
		setReg(new RegExp(e.target.value, "i"));
	};

	const setTargetSort = () => {
		setTargetOrder(targetOrder === "asc" ? "desc" : "asc");
		setCounterOrder("asc");
		setShortOrder("asc");
		dispatch(
			orderToggle({
				order: targetOrder === "asc" ? "desc" : "asc",
				val: "target",
			})
		);
	};
	const setShortSort = () => {
		setShortOrder(shortOrder === "asc" ? "desc" : "asc");
		setTargetOrder("asc");
		setCounterOrder("asc");
		dispatch(
			orderToggle({
				order: shortOrder === "asc" ? "desc" : "asc",
				val: "short",
			})
		);
	};
	const setCounterSort = () => {
		setCounterOrder(counterOrder === "asc" ? "desc" : "asc");
		setTargetOrder("asc");
		setShortOrder("asc");
		dispatch(
			orderToggle({
				order: counterOrder === "asc" ? "desc" : "asc",
				val: "short",
			})
		);
	};

	useEffect(() => {
		setStatisticData(
			data.filter((item) => {
				return (
					reg.test(item.target) ||
					reg.test(item.short) ||
					reg.test(item.counter)
				);
			})
		);
		console.log(statisticData, data);
	}, [filterValue, data]);

	return (
		<>
			<StatisticsControl
				onChange={filterHandler}
				filterVal={filterValue}
			/>
			<StatisticContainer>
				{statisticError && (
					<ErrorEl style={{ color: "red" }}>{statisticError}</ErrorEl>
				)}
				<StatisticHeader>
					<TargetEl>
						<span>Long URL</span>
						<SortControl
							onClick={() => {
								setTargetSort();
							}}
							disabled={isLoading}
						>
							{targetOrder === "asc" ? (
								<AiFillCaretDown />
							) : (
								<AiFillCaretUp />
							)}
						</SortControl>
					</TargetEl>
					<ShortEl>
						<span>Short URL</span>
						<SortControl
							onClick={() => {
								setShortSort();
							}}
							disabled={isLoading}
						>
							{shortOrder === "asc" ? (
								<AiFillCaretDown />
							) : (
								<AiFillCaretUp />
							)}
						</SortControl>
					</ShortEl>
					<CounterEl>
						<span>Clicks</span>
						<SortControl
							onClick={() => {
								setCounterSort();
							}}
							disabled={isLoading}
						>
							{counterOrder === "asc" ? (
								<AiFillCaretDown />
							) : (
								<AiFillCaretUp />
							)}
						</SortControl>
					</CounterEl>
				</StatisticHeader>
				<StatisticList>
					{statisticData.map((item) => {
						return (
							<StatisticItem key={item.id}>
								<TargetEl>
									<ShortLink href={item.target}>
										{item.target}
									</ShortLink>
								</TargetEl>
								<ShortEl>
									<ShortLink href={item.short}>
										{item.short}
									</ShortLink>
									<ShoortCopiedBtn
										onClick={() => {
											navigator.clipboard.writeText(
												item.short
											);
											setCopyText(`Copied to clipboard`);
											setCopiedId(item.id);
											setTimeout(() => {
												setCopyText("");
												setCopiedId(null);
											}, 2000);
										}}
										disabled={isLoading}
									>
										Copy
									</ShoortCopiedBtn>
									{item.id === copiedId && (
										<ShortEl>{copyText}</ShortEl>
									)}
								</ShortEl>
								<CounterEl>{item.counter}</CounterEl>
							</StatisticItem>
						);
					})}
				</StatisticList>
			</StatisticContainer>
			<OffsetControl>
				<OffsetControlBtn
					disabled={
						isLoading ||
						offset === 0 ||
						statisticData.length < limit
							? true
							: false
					}
					onClick={() => {
						dispatch(decOffset());
					}}
				>
					<AiOutlineArrowLeft /> Prev
				</OffsetControlBtn>
				<OffsetControlBtn
					disabled={
						statisticData.length < limit || isLoading ? true : false
					}
					onClick={() => {
						dispatch(incOffset());
					}}
				>
					Next <AiOutlineArrowRight />
				</OffsetControlBtn>
			</OffsetControl>
		</>
	);
};
