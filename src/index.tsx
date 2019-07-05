import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/app.state';


render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
