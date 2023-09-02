import { baseUrl } from '../shared/baseUrl';

export const mapImageURL = (data) => {
	if (Array.isArray(data)) {
		return data.map((item) => {
			return {
				...item,
				image: baseUrl + item.image,
			};
		});
	}
	return Object.keys(data).reduce((result, key) => {
		const item = data[key];
		return {
			...result,
			[key]: {
				...item,
				image: baseUrl + item.image,
			},
		};
	}, {});
};
