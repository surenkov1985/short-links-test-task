import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { limitItemToggle } from "../../store/dataReduser";
import { InputEl, LimitSelect, Select, StatisticsControlEl } from "./style";

export const StatisticsControl = ({ onChange, filterVal }) => {
	
	const dispatch = useDispatch();
	const limit = useSelector((state) => state.data.limit);

	return (
		<StatisticsControlEl>
			<InputEl
				type="text"
				placeholder="Filter by long URL, short URL or clicks..."
				value={filterVal}
				onChange={(e) => {
					onChange(e);
				}}
			/>
			<LimitSelect>
				Items:
				<Select
					onChange={(e) => {
						dispatch(limitItemToggle(e.target.value));
					}}
					defaultValue={limit}
				>
					<option>5</option>
					<option>10</option>
					<option>20</option>
					<option>50</option>
				</Select>
			</LimitSelect>
		</StatisticsControlEl>
	);
};
