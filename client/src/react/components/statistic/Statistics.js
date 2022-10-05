import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { decOffset, incOffset, orderToggle } from "../../store/dataReduser";
import { ErrorEl } from "../pages/StatisticPage/style";
import { StatisticsControl } from "../StatisticControl/StatisticControl";
import {
	AiFillCaretDown,
	AiFillCaretUp,
	AiOutlineArrowLeft,
	AiOutlineArrowRight,
} from "react-icons/ai";
import {
	CounterEl,
	OffsetControl,
	OffsetControlBtn,
	ShortCopiedBtn,
	ShortCopiedEl,
	ShortEl,
	ShortLink,
	SortControl,
	StatisticContainer,
	StatisticHeader,
	StatisticItem,
	StatisticList,
	TargetEl,
} from "./style";
import { useCounterMutation } from "../../store/apiReducer";

export const Statistics = ({ data, statisticError, isLoading }) => {
	const [statisticData, setStatisticData] = useState(data);
	const [filterValue, setFilterValue] = useState("");
	const [reg, setReg] = useState(new RegExp(filterValue, "i"));
	const offset = useSelector((state) => state.data.offset);
	const limit = useSelector((state) => state.data.limit);
	const [targetOrder, setTargetOrder] = useState("ASC");
	const [shortOrder, setShortOrder] = useState("ASC");
	const [counterOrder, setCounterOrder] = useState("ASC");
	const [copyText, setCopyText] = useState("");
	const [copiedId, setCopiedId] = useState(null);
	const [top, setTop] = useState(0);
	const [left, setLeft] = useState(0);
	const [setCounter] = useCounterMutation();

	const dispatch = useDispatch();

	const filterHandler = (e) => {
		setFilterValue(e.target.value);
		setReg(new RegExp(e.target.value, "i"));
	};

	const setTargetSort = () => {
		setTargetOrder(targetOrder === "ASC" ? "DESC" : "ASC");
		setCounterOrder("ASC");
		setShortOrder("ASC");
		dispatch(
			orderToggle({
				order: targetOrder === "ASC" ? "DESC" : "ASC",
				val: "target",
			})
		);
	};
	const setShortSort = () => {
		setShortOrder(shortOrder === "ASC" ? "DESC" : "ASC");
		setTargetOrder("ASC");
		setCounterOrder("ASC");
		dispatch(
			orderToggle({
				order: shortOrder === "ASC" ? "DESC" : "ASC",
				val: "short",
			})
		);
	};
	const setCounterSort = () => {
		setCounterOrder(counterOrder === "ASC" ? "DESC" : "ASC");
		setTargetOrder("ASC");
		setShortOrder("ASC");
		dispatch(
			orderToggle({
				order: counterOrder === "ASC" ? "DESC" : "ASC",
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
	}, [filterValue, data]);

	const shortCopiedHandler = (e, item) => {
		navigator.clipboard.writeText(item.short);
		setCopyText(`Copied to clipboard`);
		setCopiedId(item.id);
		setTimeout(() => {
			setCopyText("");
			setCopiedId(null);
		}, 1000);
		setTop(e.nativeEvent.layerY);
		setLeft(e.nativeEvent.layerX);
	};

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
									<ShortLink
										href={item.target}
										target="_blank"
									>
										{item.target}
									</ShortLink>
								</TargetEl>
								<ShortEl>
									<ShortLink
										href={item.short}
										target="_blank"
									>
										{item.short}
									</ShortLink>
									<ShortCopiedBtn
										onClick={(e) =>
											shortCopiedHandler(e, item)
										}
										disabled={isLoading}
									>
										Copy
										{item.id === copiedId && (
											<ShortCopiedEl
												top={`${top}px`}
												left={`${left}px`}
											>
												{copyText}
											</ShortCopiedEl>
										)}
									</ShortCopiedBtn>
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
						(statisticData.length < limit && offset === 0)
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
