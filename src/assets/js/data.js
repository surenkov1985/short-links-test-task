const fetchApi = (url = "", body = null, method, headers) => {
	return fetch("http://79.143.31.216/" + url, {
		method: method,
		body: body,
		headers: headers,
	}).then((res) => res.json());
};

document.addEventListener("DOMContentLoaded", () => {
	// FORMS
	const LoginForm = document.getElementById("loginForm"),
		RegisterForm = document.getElementById("registerForm"),
		SqueezeForm = document.getElementById("squeezeForm"),
		StatisticForm = document.getElementById("statisticForm"),
		RedirectForm = document.getElementById("redirectForm");

	// PAGES
	const loginPage = document.querySelector(".loginPage"),
		registerPage = document.querySelector(".registerPage"),
		indexPage = document.querySelector(".indexPage"),
		statisticsPage = document.querySelector(".statisticsPage");

	// BUTTONS
	const loginButtons = document.querySelectorAll(".loginBtn"),
		registerButton = document.querySelectorAll(".registerBtn"),
		outletButton = document.querySelector(".outBtn");

	if (localStorage.hasOwnProperty("user")) {
		statisticsPage.classList.toggle("active");
		indexPage.classList.toggle("active");
	}

	// BUTTONS EVENT LISTENERS

	outletButton.addEventListener("click", () => {
		localStorage.removeItem("user");
		statisticsPage.classList.toggle("active");
		indexPage.classList.toggle("active");
	});

	loginButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			indexPage.classList.remove("active");
			registerPage.classList.remove("active");
			loginPage.classList.toggle("active");
		});
	});

	registerButton.forEach((btn) => {
		btn.addEventListener("click", () => {
			indexPage.classList.remove("active");
			loginPage.classList.remove("active");
			registerPage.classList.toggle("active");
		});
	});

	// FORMS SUBMIT

	LoginForm?.addEventListener("submit", (e) => {
		e.preventDefault();

		const username = LoginForm.querySelector('[name="username"]'),
			password = LoginForm.querySelector('[name="password"]');

		const data = new FormData(LoginForm);
		console.log(data.get("password"));

		const formData = {
			username: username.value,
			password: password.value,
		};

		const dataString = new URLSearchParams([
			...Object.entries(formData),
		]).toString();

		fetchApi("login", dataString, "POST", {
			"Content-Type": "application/x-www-form-urlencoded",
		})
			.then((data) => {
				localStorage.setItem("user", JSON.stringify(data));
				registerPage.classList.remove("active");
				statisticsPage.classList.toggle("active");
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
			.then((data) => {
				fetchApi("login", dataString, "POST", {
					"Content-Type": "application/x-www-form-urlencoded",
				})
					.then((data) => {
						localStorage.setItem("user", JSON.stringify(data));
						registerPage.classList.remove("active");
						statisticsPage.classList.toggle("active");
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	});

	SqueezeForm?.addEventListener("submit", (e) => {
		e.preventDefault();

		const link = SqueezeForm.querySelector('[name="link"]');

		const formData = {
			link: link.value,
		};

		const Url = new URLSearchParams([
			...Object.entries(formData),
		]).toString();
		const userData = JSON.parse(localStorage.getItem("user"));
		const headers = {
			"Content-Type": "application/json",
			Authorization: userData.token_type + " " + userData.access_token,
		};

		fetchApi(`squeeze?${Url}`, null, "POST", headers)
			.then((data) => console.log(data))
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

		const Url = new URLSearchParams([
			...Object.entries(formData),
		]).toString();
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

		window.open(`http://79.143.31.216/s/${key.value}`, "_blank").focus();
		const Url = new URLSearchParams([
			...Object.entries(formData),
		]).toString();
	});
});
