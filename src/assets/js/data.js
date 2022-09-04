const BASEURL = "http://79.143.31.216/";

const fetchApi = (url = "", body = null, method, headers) => {
	return fetch(BASEURL + url, {
		method: method,
		body: body,
		headers: headers,
	});
};

document.addEventListener("DOMContentLoaded", () => {
	const order = "asc_short",
		offset = "0",
		limit = "5";

	// FORMS
	const LoginForm = document.getElementById("loginForm"),
		RegisterForm = document.getElementById("registerForm"),
		SqueezeForm = document.getElementById("squeezeForm"),
		StatisticForm = document.getElementById("statisticForm"),
		RedirectForm = document.getElementById("redirectForm"),
		Error = document.querySelector(".error"),
		RegError = document.querySelector(".reg-error");

	// PAGES
	const loginPage = document.querySelector(".loginPage"),
		registerPage = document.querySelector(".registerPage"),
		header = document.querySelector(".header"),
		statisticsPage = document.querySelector(".statisticsPage");

	// BUTTONS
	const loginButtons = document.querySelectorAll(".loginBtn"),
		registerButton = document.querySelectorAll(".registerBtn"),
		outletButton = document.querySelector(".outBtn");

	if (localStorage.hasOwnProperty("user")) {
		statisticsPage.classList.toggle("active");
		loginPage.classList.remove("active");
		header.classList.toggle("active");
		getStatistics(order, offset, limit);
	}

	// BUTTONS EVENT LISTENERS

	outletButton.addEventListener("click", (e) => {
		e.preventDefault();

		localStorage.removeItem("user");
		loginPage.classList.toggle("active");
		header.classList.remove("active");
		statisticsPage.classList.remove("active");
	});

	function getStatistics(order, offset, limit) {
		const formData = {
			order: order,
			offset: offset,
			limit: limit,
		};

		console.log(formData);
		const Url = new URLSearchParams([
			...Object.entries(formData),
		]).toString();
		const userData = JSON.parse(localStorage.getItem("user"));
		const headers = {
			"Content-Type": "application/json",
			Authorization: userData.token_type + " " + userData.access_token,
		};

		fetchApi(`statistics?${Url}`, null, "GET", headers)
			.then((res) => {
				console.log(res);
				if (!res.ok) {
					console.log(res.statusText);
				}
				return res.json();
			})
			.then((data) => buildStatistics(data))
			.catch((err) => console.log(err));
	}

	function buildStatistics(data) {
		const statisticListHead = document.querySelector(".statisticListHead");
		const statisticsList = document.createElement("ul");
		statisticsList.className = "statisticList";
		statisticListHead.innerHTML = "";

		data.map((res) => {
			const statisticsItem = document.createElement("li"),
				linkEl = document.createElement("div"),
				shortEl = document.createElement("div"),
				counterEl = document.createElement("div");

			linkEl.className = "linkEl";
			shortEl.className = "shortEl";
			counterEl.className = "counterEl";
			statisticsItem.className = "statisticItem";

			shortEl.innerHTML = res.short;
			linkEl.innerHTML = res.target;
			counterEl.innerHTML = res.counter;

			statisticsItem.appendChild(linkEl);
			statisticsItem.appendChild(shortEl);
			statisticsItem.appendChild(counterEl);
			statisticsList.appendChild(statisticsItem);
		});

		statisticListHead.appendChild(statisticsList);
	}

	loginButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			if (!localStorage.hasOwnProperty("user")) {
				registerPage.classList.remove("active");
				loginPage.classList.toggle("active");
			}
		});
	});

	registerButton.forEach((btn) => {
		btn.addEventListener("click", () => {
			if (!localStorage.hasOwnProperty("user")) {
				loginPage.classList.remove("active");
				registerPage.classList.toggle("active");
			}
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
			.then((res) => {
				console.log(res);

				return res.json();
			})
			.then((data) => {
				if (data.access_token) {
					localStorage.setItem("user", JSON.stringify(data));
					registerPage.classList.remove("active");
					loginPage.classList.remove("active");
					statisticsPage.classList.toggle("active");
					Error.innerHTML = "";
				}
				Error.innerHTML = data.detail;
			})
			.then(() => {
				getStatistics(order, offset, limit);
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
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.username) {
					fetchApi("login", dataString, "POST", {
						"Content-Type": "application/x-www-form-urlencoded",
					})
						.then((res) => {
							return res.json();
						})
						.then((data) => {
							if (data.access_token) {
								localStorage.setItem(
									"user",
									JSON.stringify(data)
								);
								registerPage.classList.remove("active");
								statisticsPage.classList.toggle("active");
								Error.innerHTML = "data.detail";
							}
							Error.innerHTML = data.detail;
						})
						.then(() => {
							getStatistics(order, offset, limit);
						})
						.catch((err) => console.log(err));
					RegError.innerHTML = "";
				}
				RegError.innerHTML = data.detail;
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
			.then((data) => getStatistics(order, offset, limit))
			.catch((err) => console.log(err));
	});
});
