const fetchApi = (url = "", body = null, method, headers) => {
	return fetch("http://79.143.31.216/" + url, {
		method: method,
		body: body,
		headers: headers,
	}).then((res) => res.json());
};

// if (localStorage.hasOwnProperty("user")) {
// 	document.location.href = "statistics.html";
// }

const LoginForm = document.getElementById("loginForm");
const RegisterForm = document.getElementById("registerForm");
const StatisticForm = document.getElementById("statisticForm");
const SqueezeForm = document.getElementById("squeezeForm");
const ShortLinkEl = document.querySelector(".shortLink");
const RedirectForm = document.getElementById("redirectForm");

LoginForm?.addEventListener("submit", (e) => {
	e.preventDefault();

	const grant_type = LoginForm.querySelector('[name="grant_type"]');
	const username = LoginForm.querySelector('[name="username"]');
	const password = LoginForm.querySelector('[name="password"]');
	const scope = LoginForm.querySelector('[name="scope"]');
	const client_id = LoginForm.querySelector('[name="client_id"]');
	const client_secret = LoginForm.querySelector('[name="client_secret"]');

	const data = new FormData(LoginForm);
	console.log(data.get("password"));

	const formData = {
		grant_type: grant_type.value,
		username: username.value,
		password: password.value,
		scope: scope.value,
		client_id: client_id.value,
		client_secret: client_secret.value,
	};

	const dataString = new URLSearchParams([
		...Object.entries(formData),
	]).toString();

	fetchApi("login", dataString, "POST", {
		"Content-Type": "application/x-www-form-urlencoded",
	})
		.then((data) => {
			localStorage.setItem("user", JSON.stringify(data));
			document.location.href = "statistics.html";
		})
		.catch((err) => console.log(err));
});

RegisterForm?.addEventListener("submit", (e) => {
	e.preventDefault();

	const username = RegisterForm.querySelector('[name="username"]'),
		password = RegisterForm.querySelector('[name="password"]');

	const formData = {
		username: username.value,
		password: password.value,
	};

	const dataString = new URLSearchParams([
		...Object.entries(formData),
	]).toString();

	fetchApi(`register?${dataString}`, JSON.stringify(formData), "POST", {
		"Content-Type": "application/json",
	})
		.then((data) => (document.location.href = "login.html"))
		.catch((err) => console.log(err));
});

SqueezeForm?.addEventListener("submit", (e) => {
	e.preventDefault();

	const link = SqueezeForm.querySelector('[name="link"]');

	const formData = {
		link: link.value,
	};

	const Url = new URLSearchParams([...Object.entries(formData)]).toString();
	const userData = JSON.parse(localStorage.getItem("user"));
	const headers = {
		"Content-Type": "application/json",
		Authorization: userData.token_type + " " + userData.access_token,
	};

	fetchApi(`squeeze?${Url}`, null, "POST", headers)
		.then((data) => (ShortLinkEl.innerHTML = data.short))
		.catch((err) => console.log(err));
});

StatisticForm?.addEventListener("submit", (e) => {
	e.preventDefault();

	const order = StatisticForm.querySelector('[name="order"]');
	const offset = StatisticForm.querySelector('[name="offset"]');
	const limit = StatisticForm.querySelector('[name="limit"]');

	const formData = {
		order: order.value,
		offset: offset.value,
		limit: limit.value,
	};

	const Url = new URLSearchParams([...Object.entries(formData)]).toString();
	const userData = JSON.parse(localStorage.getItem("user"));
	const headers = {
		"Content-Type": "application/json",
		Authorization: userData.token_type + " " + userData.access_token,
	};

	fetchApi(`statistics?${Url}`, null, "GET", headers)
		.then((data) => console.log(data))
		.catch((err) => console.log(err));
});

RedirectForm?.addEventListener("submit", (e) => {
	e.preventDefault();

	const key = RedirectForm.querySelector('[name="key"]');

	const formData = {
		key: key.value,
	};

	const Url = new URLSearchParams([...Object.entries(formData)]).toString();
	const userData = JSON.parse(localStorage.getItem("user"));
	const headers = {
		"Content-Type": "application/json",
		Authorization: userData.token_type + " " + userData.access_token,
	};

	fetchApi(`s/${key.value}`, null, "GET", headers)
		.then((data) => (ShortLinkEl.innerHTML = data.short))
		.catch((err) => console.log(err));
});
