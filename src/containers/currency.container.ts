import { connect } from 'react-redux';
import { Dispatch } from 'redux-api-middleware';
import { CurrencyPage } from '../pages/CurrencyPage';
import { AppState } from '../store/app.state';
import { Actions } from '../store/currency/symbol.action';

const mapStateToProps = (state: AppState) => ({data: state.currency.items});

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

// export const CurrencyContainer = connect(mapStateToProps, mapDispatchToProps)(CurrencyPage);
