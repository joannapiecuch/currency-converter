import { CurrencySymbol } from '../../models/currency-symbol';
import { PayloadAction } from '../action.types';
import { ActionTypes } from './symbol.action';

export interface CurrencyState {
	items: CurrencySymbol
}

const initialState: CurrencyState = {
	items: {
		success: false,
		symbols: {key: ''}
	}
};

export function symbolResolver(state = initialState, action: PayloadAction): CurrencyState {
	switch ( action.type ) {
		case ActionTypes.GET_ALL.SUCCESS:
			return {
				...state,
				items: action.payload,
			};
		default:
			return state
	}
}
