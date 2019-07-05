import { connect } from 'react-redux';
import { Dispatch } from 'redux-api-middleware';
import { CurrencyPage } from '../pages/CurrencyPage';
import { AppState } from '../store/app.state';
import { Actions } from '../store/currency/symbol.action';

const mapStateToProps = (state: AppState) => ({data: state.symbol.items});

const mapDispatchToProps = (dispatch: Dispatch) => ({
	getData: () => dispatch(Actions.getAll()),
});

export const SymbolContainer = connect(mapStateToProps, mapDispatchToProps)(CurrencyPage);
