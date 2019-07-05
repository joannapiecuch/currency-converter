import { Dispatch } from 'react';
import { AnyAction, Middleware, MiddlewareAPI } from 'redux';
import { RSAA } from 'redux-api-middleware';

export const tokenMiddleware: Middleware = (store: MiddlewareAPI) => (next: Dispatch<any>) => (action: AnyAction) => {
	const callAPI = action[RSAA];

	if (typeof callAPI === 'undefined') {
		return next(action);
	}

	return next({
		[RSAA]: {
			...callAPI,
			headers: {
				...callAPI.headers,
				Authorization: 'b3e539b55f98d38c79cf53b8776ab605',
			},
		},
	});

};
