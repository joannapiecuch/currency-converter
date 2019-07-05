import { Currency } from '../../models/currency';
import { PayloadAction } from '../action.types';
import { ActionTypes } from './currency.actions';

export interface CurrencyState {
	items: Currency
}

const initialState: CurrencyState = {
	items: {
		from: '',
		to: '',
		amount: 0,
		date: '',
	}
};

export function currencyResolver(state = initialState, action: PayloadAction): CurrencyState {
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
