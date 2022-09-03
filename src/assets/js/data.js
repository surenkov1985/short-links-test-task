const fetchApi = (url = "", body = null, method, headers) => {
	return fetch("http://79.143.31.216/" + url, {
		method: method,
		body: body,
		headers: headers,
	}).then((res) => res.json());
};

const LoginForm = document.getElementById("loginForm");
const RegisterForm = document.getElementById("registerForm");

LoginForm?.addEventListener("submit", (e) => {
	e.preventDefault();

	const grant_type = LoginForm.querySelector('[name="grant_type"]');
	const username = LoginForm.querySelector('[name="username"]');
	const password = LoginForm.querySelector('[name="password"]');
	const scope = LoginForm.querySelector('[name="scope"]');
	const client_id = LoginForm.querySelector('[name="client_id"]');
	const client_secret = LoginForm.querySelector('[name="client_secret"]');

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
		.then((data) => localStorage.setItem("user", JSON.stringify(data)))
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
		.then((data) => console.log(data))
		.catch((err) => console.log(err));
});
