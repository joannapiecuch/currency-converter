import { AnyAction, Middleware } from 'redux';
import { RSAA, Dispatch } from 'redux-api-middleware';

let API_URL: string;

if ( process.env.REACT_APP_BACKEND_ENDPOINT) {
		API_URL = process.env.REACT_APP_BACKEND_ENDPOINT;
}

const prepareEndpoint = ({ endpoint }: { endpoint: string }) => {
	endpoint = endpoint.replace(/^\//, '');
	const baseUrl = API_URL.replace(/\/$/, '');

	return `${baseUrl}/${endpoint}`;
};


export const endpointMiddleware = () => (next: Dispatch) => (action: AnyAction) => {
	const callAPI = action[RSAA];

	if (typeof callAPI === 'undefined') {
		return next(action);
	}

	return next({
		[RSAA]: { ...callAPI, endpoint: prepareEndpoint(callAPI) },
	});
};
