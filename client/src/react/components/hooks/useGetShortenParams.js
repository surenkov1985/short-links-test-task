import { useState } from "react";

export const useGetShortenParams = () => {
	const [shortenData, setShortenData] = useState({
		link: "",
	});

	const getShortenParams = (data) => {
		const regUrl = /^http(s)?:\/\//;

		const formData = regUrl.test(data.link)
			? data.link
			: "http://" + data.link;

		setShortenData({ link: formData });
	};

	return { getShortenParams, shortenData };
};
