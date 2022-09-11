import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Auth } from "./pages/Auth";
import { Register } from "./pages/Register";
import { StatisticsPage } from "./pages/statisticPage/StatisticsPage";

export const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="login" element={<Auth />} />
					<Route path="register" element={<Register />} />
					<Route path="statistics" element={<StatisticsPage />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};
