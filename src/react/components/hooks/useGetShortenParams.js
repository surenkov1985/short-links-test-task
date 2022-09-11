import { useState } from "react";

export const useGetShortenParams = () => {
	const [shortenData, setShortenData] = useState({
		urlString: "",
		authData: "",
	});

	const getShortenParams = (user, data) => {
		const regUrl = /^http(s)?:\/\//;

		const formData = {
			link: regUrl.test(data.link) ? data.link : "http://" + data.link,
		};
		const shortenUrl = new URLSearchParams([
			...Object.entries(formData),
		]).toString();
		const userData = user.token_type + " " + user.access_token;

		setShortenData({ urlString: shortenUrl, authData: userData });
	};

	return { getShortenParams, shortenData };
};
