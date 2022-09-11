import "./styles/style.scss";
import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store/store";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
