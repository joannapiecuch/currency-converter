import { RSAA, RSAAction } from 'redux-api-middleware';
import { createActionType } from '../action.types';

export const ActionTypes = {
	GET_ALL: createActionType('Currency', 'GET_ALL')
};

export const Actions = {
	getAll: (): RSAAction => ({
		[ RSAA ]: {
			endpoint: `/symbols?access_key=b3e539b55f98d38c79cf53b8776ab605`,
			method: 'GET',
			types: [ ActionTypes.GET_ALL.REQUEST, ActionTypes.GET_ALL.SUCCESS, ActionTypes.GET_ALL.FAILURE ],
		},
	}),
};
