import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Auth } from "./pages/Auth";
import { Register } from "./pages/Register";
import { Statistics } from "./pages/Statistics";

export const App = () => {
	return (
		<div>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="login" element={<Auth />} />
						<Route path="register" element={<Register />} />
						<Route path="statistics" element={<Statistics />} />
					</Route>
				</Routes>
			</HashRouter>
		</div>
	);
};
