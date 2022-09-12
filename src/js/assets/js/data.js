const BASEURL = "http://79.143.31.216/";

const fetchApi = (url = "", body = null, method, headers) => {
	return fetch(BASEURL + url, {
		method: method,
		body: body,
		headers: headers,
	});
};

let order = { order: "asc", val: "target" },
	offset = 0,
	limit = 5,
	counter = 0,
	ascIcon = "&#9660",
	descIcon = "&#9650",
	statisticData = [],
	timer = 0;

// FORMS
const LoginForm = document.querySelector(".login__form"),
	RegisterForm = document.querySelector(".register__form"),
	SqueezeForm = document.getElementById("squeezeForm"),
	ErrorEl = document.querySelector(".login__error"),
	RegError = document.querySelector(".register__error"),
	loginSubmit = document.querySelector(".login__submit"),
	registerSubmit = document.querySelector(".register__submit"),
	squeezeSubmit = document.querySelector(".squeeze__submit"),
	squeezeError = document.querySelector(".squeeze__error"),
	filterInput = document.querySelector(".statistics__filter-input"),
	limitSelect = document.querySelector(".statistics__limit-select");

// PAGES
const loginPage = document.querySelector(".loginPage"),
	registerPage = document.querySelector(".registerPage"),
	header = document.querySelector(".header"),
	statisticsPage = document.querySelector(".statisticsPage"),
	sortError = document.querySelector(".statistics__sort-error");

//
let statisticsItem,
	linkEl,
	shortEl,
	counterEl,
	target,
	copy,
	targetBlock,
	short;

// BUTTONS
const loginButtons = document.querySelectorAll(".register__loginBtn"),
	registerButton = document.querySelectorAll(".login__registerBtn"),
	logoutButton = document.querySelector(".header__logoutBtn"),
	prevControlBtn = document.querySelector(".prev"),
	nextControlBtn = document.querySelector(".next"),
	sortButtons = document.querySelectorAll(".statistic__sortBtn"),
	reactLink = document.querySelector(".header__reactLink");

if (localStorage.hasOwnProperty("user")) {
	statisticsPage.classList.toggle("active");
	loginPage.classList.remove("active");
	logoutButton.classList.toggle("active");
	getStatistics(order, offset, limit);
}

// BUTTONS EVENT LISTENERS

logoutButton.addEventListener("click", (e) => {
	e.preventDefault();

	localStorage.removeItem("user");
	loginPage.classList.toggle("active");
	logoutButton.classList.remove("active");
	statisticsPage.classList.remove("active");
	order = { order: "asc", val: "target" };
	offset = 0;
	limit = 5;
	limitSelect.value = 5;
});

sortButtons.forEach((button) => {
	button.addEventListener("click", function (e) {
		order.val = button.dataset.val;
		if (button.dataset.order === "asc") {
			order.order = "desc";
			button.dataset.order = "desc";
			button.innerHTML = descIcon;
		} else {
			order.order = "asc";
			button.dataset.order = "asc";
			button.innerHTML = ascIcon;
		}
		sortButtons.forEach((button) => {
			if (button.dataset.val !== order.val) {
				button.dataset.order = "asc";
				button.innerHTML = ascIcon;
			}
		});
		sortButtons.forEach((button) => {
			button.setAttribute("disabled", true);
		});
		prevControlBtn.setAttribute("disabled", true);
		nextControlBtn.setAttribute("disabled", true);

		getStatistics(order, offset, limit);
	});
});

prevControlBtn.addEventListener("click", () => {
	if (offset === 0) {
		prevControlBtn.setAttribute("disabled", true);
		return;
	}
	offset -= limit;

	sortButtons.forEach((button) => {
		button.setAttribute("disabled", true);
	});
	prevControlBtn.setAttribute("disabled", true);
	nextControlBtn.setAttribute("disabled", true);

	getStatistics(order, offset, limit);
});

nextControlBtn.addEventListener("click", () => {
	offset += limit;

	sortButtons.forEach((button) => {
		button.setAttribute("disabled", true);
	});
	prevControlBtn.setAttribute("disabled", true);
	nextControlBtn.setAttribute("disabled", true);

	getStatistics(order, offset, limit);
});

function setUrl(data) {
	return new URLSearchParams([...Object.entries(data)]).toString();
}

async function getStatistics(order, offset, limit) {
	const formData = {
		offset: offset,
		limit: limit,
	};

	if (offset === 0) {
		prevControlBtn.setAttribute("disabled", true);
	}
	nextControlBtn.setAttribute("disabled", true);
	const orderUrl = `order=${order.order + "_" + order.val}`;

	const Url = orderUrl + "&" + setUrl(formData);
	const userData = JSON.parse(localStorage.getItem("user"));
	const headers = {
		"Content-Type": "application/json",
		Authorization: userData.token_type + " " + userData.access_token,
	};

	try {
		let response = await fetchApi(
			`statistics?${Url}`,
			null,
			"GET",
			headers
		);

		let data = await response.json();
		if (data.detail) {
			throw new Error(data.detail);
		} else {
			statisticData = data.map((item) => {
				return { ...item, short: BASEURL + "s/" + item.short };
			});
			buildStatistics(statisticData);
			sortButtons.forEach((button) => {
				button.removeAttribute("disabled");
			});
			if (data.length < limit) {
				nextControlBtn.setAttribute("disabled", true);
			} else {
				nextControlBtn.removeAttribute("disabled");
			}
			if (offset === 0) {
				prevControlBtn.setAttribute("disabled", true);
			} else {
				prevControlBtn.removeAttribute("disabled");
			}
		}
	} catch (error) {
		sortError.innerHTML = error.message;
		sortError.classList.toggle("active");
		sortButtons.forEach((button) => {
			button.removeAttribute("disabled");
		});
		prevControlBtn.removeAttribute("disabled");
		nextControlBtn.removeAttribute("disabled");
		setTimeout(() => {
			sortError.innerHTML = "";
			sortError.classList.remove("active");
		}, 2500);
	}
}

function buildStatistics(data) {
	const statisticListHead = document.querySelector(".statistic__list-head");
	const statisticsList = document.createElement("ul");
	statisticsList.className = "statistic__list";
	statisticListHead.innerHTML = "";

	data.map((res) => {
		const targetUrl = res.target;
		const url = res.short;
		statisticsItem = document.createElement("li");
		linkEl = document.createElement("div");
		shortEl = document.createElement("div");
		counterEl = document.createElement("div");
		target = document.createElement("a");
		short = document.createElement("a");
		copy = document.createElement("button");
		copy.style.position = "relative";

		linkEl.className = "statistic__linkEl";
		shortEl.className = "statistic__shortEl";
		counterEl.className = "statistic__counterEl";
		statisticsItem.className = "statistic__item";
		copy.className = "linkCopyBtn";
		target.className = "target-link"
		short.className = "short-link"

		target.href = targetUrl;
		target.target = "_blank";
		target.innerHTML = targetUrl;
		short.href = url;
		short.target = "_blank";
		short.innerHTML = url;
		copy.innerHTML = "Copy";
		counterEl.innerHTML = res.counter;
		shortEl.appendChild(short);
		shortEl.appendChild(copy);
		linkEl.appendChild(target);
		statisticsItem.appendChild(linkEl);
		statisticsItem.appendChild(shortEl);
		statisticsItem.appendChild(counterEl);
		statisticsList.appendChild(statisticsItem);

		copy.addEventListener("click", function (e) {
			const span = document.createElement("span");

			span.className = "copyHint";
			span.style.top = e.offsetY + "px";
			span.style.left = e.offsetX + "px";
			span.innerHTML = `URL ${url} copied`;
			this.appendChild(span);

			navigator.clipboard.writeText(url);

			setTimeout(() => {
				this.removeChild(span);
			}, 1500);
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

limitSelect.addEventListener("change", (e) => {
	console.log(limitSelect.value);
	limit = limitSelect.value;

	getStatistics(order, offset, limit);
});

function filterStatistics() {
	const reg = new RegExp(filterInput.value, "i");
	let filterData = statisticData.filter((item) => {
		return (
			reg.test(item.target) ||
			reg.test(item.short) ||
			reg.test(item.counter)
		);
	});

	buildStatistics(filterData);
	if (filterData.length < limit) {
		nextControlBtn.setAttribute("disabled", true);
	} else {
		nextControlBtn.removeAttribute("disabled");
	}
}

filterInput?.addEventListener("input", function (e) {
	filterStatistics();
});

LoginForm?.addEventListener("submit", async (e) => {
	e.preventDefault();

	console.log(111);

	const username = LoginForm.querySelector('[name="username"]'),
		password = LoginForm.querySelector('[name="password"]');

	const formData = {
		username: username.value,
		password: password.value,
	};

	const dataString = setUrl(formData);
	loginSubmit.setAttribute("disabled", true);
	try {
		let response = await fetchApi("login", dataString, "POST", {
			"Content-Type": "application/x-www-form-urlencoded",
		});

		let data = await response.json();
		if (data.access_token) {
			localStorage.setItem("user", JSON.stringify(data));
			registerPage.classList.remove("active");
			loginPage.classList.remove("active");
			statisticsPage.classList.toggle("active");
			logoutButton.classList.toggle("active");
			getStatistics(order, offset, limit);
			username.value = "";
			password.value = "";
		} else {
			throw new Error(data.detail);
		}
	} catch (error) {
		ErrorEl.innerHTML = error.message;
		ErrorEl.classList.toggle("active");
		setTimeout(() => {
			ErrorEl.innerHTML = "";
			ErrorEl.classList.remove("active");
		}, 2500);
	} finally {
		loginSubmit.removeAttribute("disabled");
	}
});

RegisterForm?.addEventListener("submit", async (e) => {
	e.preventDefault();

	const username = RegisterForm.querySelector('[name="username"]'),
		password = RegisterForm.querySelector('[name="password"]');

	const formData = {
		username: username.value,
		password: password.value,
	};

	registerSubmit.setAttribute("disabled", true);

	const dataString = setUrl(formData);

	try {
		let resp = await fetchApi(
			`register?${dataString}`,
			JSON.stringify(formData),
			"POST",
			{
				"Content-Type": "application/json",
			}
		);
		let regData = await resp.json();
		if (regData.username) {
			let response = await fetchApi("login", dataString, "POST", {
				"Content-Type": "application/x-www-form-urlencoded",
			});
			let loginData = await response.json();
			if (loginData.access_token) {
				localStorage.setItem("user", JSON.stringify(loginData));
				registerPage.classList.remove("active");
				statisticsPage.classList.toggle("active");
				logoutButton.classList.toggle("active");
				getStatistics(order, offset, limit);
				username.value = "";
				password.value = "";
			} else {
				throw new Error(loginData.detail);
			}
		} else {
			throw new Error(regData.detail);
		}
	} catch (error) {
		RegError.innerHTML = error.message;
		RegError.classList.toggle("active");
		setTimeout(() => {
			RegError.innerHTML = "";
			RegError.classList.remove("active");
		}, 2500);
	} finally {
		registerSubmit.removeAttribute("disabled");
	}
});

SqueezeForm?.addEventListener("submit", async (e) => {
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
	squeezeSubmit.setAttribute("disabled", true);

	try {
		let response = await fetchApi(`squeeze?${Url}`, null, "POST", headers);
		let data = await response.json();

		if (data.short) {
			getStatistics(order, offset, limit);
			link.value = "";
		} else {
			throw new Error(data.detail[0].msg);
		}
	} catch (error) {
		squeezeError.innerHTML = error.message;
		squeezeError.classList.toggle("active");
		setTimeout(() => {
			squeezeError.innerHTML = "";
			squeezeError.classList.remove("active");
		}, 2500);
	} finally {
		squeezeSubmit.removeAttribute("disabled");
	}
});
