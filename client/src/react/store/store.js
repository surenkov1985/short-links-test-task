import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiReducer } from "./apiReducer";
import dataReduser from "./dataReduser";

export const store = configureStore({
	reducer: {
		data: dataReduser,
		[apiReducer.reducerPath]: apiReducer.reducer,
	},

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiReducer.middleware),
});

setupListeners(store.dispatch);
