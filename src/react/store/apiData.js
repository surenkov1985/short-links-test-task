import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiData = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "http://79.143.31.216" }),
	endpoints: (build) => ({
		login: build.mutation({
			query: (data) => ({
				url: "/login",
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}),
		}),
		register: build.mutation({
			query: (urlString, data) => ({
				url: `/register?${urlString}`,
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = apiData;