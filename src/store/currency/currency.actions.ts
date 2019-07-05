import { Currency } from '../../models/currency';
import { createActionType } from '../action.types';
import { RSAA, RSAAction } from 'redux-api-middleware';

export const ActionTypes = {
	GET_ALL: createActionType('Currency', 'GET_ALL')
};

export const Actions = {
	convert: ({from, to, amount, date}: Currency): RSAAction => ({
		[ RSAA ]: {
			endpoint: `/convert?access_key=b3e539b55f98d38c79cf53b8776ab605`,
			method: 'POST',
			body: {from, to, amount, date},
			types: [ ActionTypes.GET_ALL.REQUEST, ActionTypes.GET_ALL.SUCCESS, ActionTypes.GET_ALL.FAILURE ],
		},
	}),
};
