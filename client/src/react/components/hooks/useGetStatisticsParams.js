import { useState } from "react";

export const useGetStatisticsParams = () => {
	const [apiData, setApiData] = useState({
		urlString: "",
		authData: "",
	});

	const getApiParams = (user, order, offset, limit) => {
		const orderSetting = `order=${order.order}_${order.val}`;
		const statisticUrl =
			orderSetting +
			"&" +
			new URLSearchParams([
				...Object.entries({ offset: offset, limit: limit }),
			]).toString();
		const userData = user.token_type + " " + user.access_token;

		setApiData({urlString: statisticUrl, authData: userData });
	};

	return { apiData, getApiParams };
};
