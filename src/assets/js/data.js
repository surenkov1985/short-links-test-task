const BASEURL = "http://79.143.31.216/";

const fetchApi = (url = "", body = null, method, headers) => {
	return fetch(BASEURL + url, {
		method: method,
		body: body,
		headers: headers,
	});
};

let order = [
		{ order: "asc", val: "short" },
		{ order: "asc", val: "target" },
		{ order: "asc", val: "counter" },
	],
	offset = 0,
	limit = 5,
	counter = 0,
	ascIcon = "&#8710",
	descIcon = "&#8711";

// FORMS
const LoginForm = document.getElementById("loginForm"),
	RegisterForm = document.getElementById("registerForm"),
	SqueezeForm = document.getElementById("squeezeForm"),
	Error = document.querySelector(".error"),
	RegError = document.querySelector(".reg-error");

// PAGES
const loginPage = document.querySelector(".loginPage"),
	registerPage = document.querySelector(".registerPage"),
	header = document.querySelector(".header"),
	statisticsPage = document.querySelector(".statisticsPage");

//
let statisticsItem, linkEl, shortEl, counterEl, target, copy, targetBlock;

// BUTTONS
const loginButtons = document.querySelectorAll(".loginBtn"),
	registerButton = document.querySelectorAll(".registerBtn"),
	logoutButton = document.querySelector(".logoutBtn"),
	prevControlBtn = document.querySelector(".prev"),
	nextControlBtn = document.querySelector(".next"),
	sortButtons = document.querySelectorAll(".sortBtn");

if (localStorage.hasOwnProperty("user")) {
	statisticsPage.classList.toggle("active");
	loginPage.classList.remove("active");
	header.classList.toggle("active");
	getStatistics(order, offset, limit);
}

// BUTTONS EVENT LISTENERS

logoutButton.addEventListener("click", (e) => {
	e.preventDefault();

	localStorage.removeItem("user");
	loginPage.classList.toggle("active");
	header.classList.remove("active");
	statisticsPage.classList.remove("active");
});

prevControlBtn.addEventListener("click", () => {
	if (offset === 0) {
		return;
	}
	offset -= limit;
	console.log(offset);
	getStatistics(order, offset, limit);
});

sortButtons.forEach((button) => {
	button.addEventListener("click", function (e) {
		order.map((item) => {
			if (item.val === button.dataset.val) {
				if (item.order === "asc") {
					item.order = "desc";
					button.dataset.order = "desc";
					button.innerHTML = descIcon;
				} else {
					item.order = "asc";
					button.dataset.order = "asc";
					button.innerHTML = ascIcon;
				}
			}
		});

		getStatistics(order, offset, limit);
	});
});

nextControlBtn.addEventListener("click", () => {
	offset += limit;
	console.log(offset);
	getStatistics(order, offset, limit);
});

function setUrl(data) {
	return new URLSearchParams([...Object.entries(data)]).toString();
}

function getStatistics(order, offset, limit) {
	const formData = {
		offset: offset,
		limit: limit,
	};
	const orderUrl = [];
	order.forEach((item) =>
		orderUrl.push(`order=${item.order + "_" + item.val}`)
	);

	const Url = orderUrl.join("&") + "&" + setUrl(formData);
	const userData = JSON.parse(localStorage.getItem("user"));
	const headers = {
		"Content-Type": "application/json",
		Authorization: userData.token_type + " " + userData.access_token,
	};

	fetchApi(`statistics?${Url}`, null, "GET", headers)
		.then((res) => {
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
		const url = BASEURL + "s/" + res.short;
		statisticsItem = document.createElement("li");
		linkEl = document.createElement("div");
		shortEl = document.createElement("div");
		counterEl = document.createElement("div");
		target = document.createElement("a");
		copy = document.createElement("button");

		linkEl.className = "linkEl";
		shortEl.className = "shortEl";
		counterEl.className = "counterEl";
		statisticsItem.className = "statisticItem";
		copy.className = "linkCopyBtn";

		target.href = url;
		target.target = "_blank";
		target.innerHTML = url;
		copy.innerHTML = "Copy";
		linkEl.innerHTML = res.target;
		counterEl.innerHTML = res.counter;
		shortEl.appendChild(target);
		shortEl.appendChild(copy);
		statisticsItem.appendChild(linkEl);
		statisticsItem.appendChild(shortEl);
		statisticsItem.appendChild(counterEl);
		statisticsList.appendChild(statisticsItem);

		copy.addEventListener("click", () => {
			navigator.clipboard.writeText(url);
		});
	});

	statisticListHead.appendChild(statisticsList);
	targetBlock = document.querySelectorAll(".shortEl");
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

	const formData = {
		username: username.value,
		password: password.value,
	};

	const dataString = setUrl(formData);

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
				header.classList.toggle("active");
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

	const dataString = setUrl(formData);

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
							localStorage.setItem("user", JSON.stringify(data));
							registerPage.classList.remove("active");
							statisticsPage.classList.toggle("active");
							header.classList.toggle("active");
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
	const regUrl = /^http(s)?:\/\//;

	const formData = {
		link: regUrl.test(link.value) ? link.value : "http://" + link.value,
	};

	const Url = setUrl(formData);
	const userData = JSON.parse(localStorage.getItem("user"));
	const headers = {
		"Content-Type": "application/json",
		Authorization: userData.token_type + " " + userData.access_token,
	};

	fetchApi(`squeeze?${Url}`, null, "POST", headers)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			getStatistics(order, offset, limit);
			link.value = "";
		})
		.catch((err) => console.log(err));
});
