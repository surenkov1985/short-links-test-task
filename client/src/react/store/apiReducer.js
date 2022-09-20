import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiReducer = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
	endpoints: (build) => ({
		login: build.mutation({
			query: (data) => ({
				url: "/login",
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
		}),
		register: build.mutation({
			query: (data) => ({
				url: "/register",
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
				},
			}),
		}),
		shorten: build.mutation({
			query: ({ data, token }) => ({
				url: "/squeeze",
				method: "POST",
				body: data,
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
			}),
		}),
		statistics: build.mutation({
			query: ({ body, token }) => ({
				url: `/statistics`,
				method: "POST",
				body: { body },
				headers: {
					"Content-Type": "application/json",
					authorization: `Bearer ${token}`,
				},
			}),
		}),
		counter: build.mutation({
			query: (shortUrl) => ({
				url: `/s/${shortUrl}`,
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useShortenMutation,
	useStatisticsMutation,
	useCounterMutation,
} = apiReducer;
