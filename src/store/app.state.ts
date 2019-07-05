import { applyMiddleware, combineReducers, createStore } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { currencyResolver } from './currency/currency.resolver';
import { symbolResolver } from './currency/symbol.resolver';
import { bodyMiddleware } from './middlewares/body.middleware';
import { endpointMiddleware } from './middlewares/endopint.middleware';
import { tokenMiddleware } from './middlewares/token.middleware';

const rootReducer = combineReducers({
	currency: currencyResolver,
	symbol: symbolResolver,
});

const middlewares = applyMiddleware(endpointMiddleware, tokenMiddleware, bodyMiddleware, apiMiddleware);

export const store = createStore(rootReducer, middlewares);

export type AppState = ReturnType<typeof rootReducer>
