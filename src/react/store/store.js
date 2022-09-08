import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { apiData } from "./apiData";
import dataReduser from "./dataReduser";

export const store = configureStore({
	reducer: {
        data: dataReduser,
        [apiData.reducerPath]: apiData.reducer
    },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiData.middleware),
});

setupListeners(store.dispatch)