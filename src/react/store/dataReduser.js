import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		auth: false,
	},
	reducers: {
		authToggle(state, actions) {
			state.auth = actions.payload;
		},
	},
});

export const { authToggle } = dataSlice.actions;
export default dataSlice.reducer;
