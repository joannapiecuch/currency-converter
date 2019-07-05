import { AnyAction, Middleware } from 'redux';
import { RSAA, Dispatch } from 'redux-api-middleware';

export const bodyMiddleware: Middleware = () => (next: Dispatch) => (action: AnyAction) => {
	const rsaa = action[RSAA];

	if (typeof rsaa === 'undefined' || !rsaa.body) {
		return next(action);
	}

	const body = JSON.stringify(rsaa.body);

	return next({
		[RSAA]: {
			...rsaa,
			headers: {
				...rsaa.headers,
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body,
		},
	});
};
