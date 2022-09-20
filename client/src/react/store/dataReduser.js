import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		auth: false,
		offset: 0,
		limit: 5,
		order: {
			order: "ASC",
			val: "target",
		},
		statistics: [],
	},
	reducers: {
		authToggle(state, actions) {
			state.auth = actions.payload;
		},
		setStatistics(state, actions) {
			state.statistics = actions.payload;
		},
		decOffset(state) {
			state.offset = state.offset - state.limit;
		},
		incOffset(state) {
			state.offset = state.offset + state.limit;
		},
		setDefaultState(state) {
			(state.offset = 0), (state.limit = 5);
		},
		limitItemToggle(state, actions) {
			state.limit = actions.payload;
		},
		orderToggle(state, actions) {
			state.order = actions.payload;
		},
	},
});

export const {
	authToggle,
	setStatistics,
	decOffset,
	incOffset,
	limitItemToggle,
	orderToggle,
	setDefaultState
} = dataSlice.actions;
export default dataSlice.reducer;
