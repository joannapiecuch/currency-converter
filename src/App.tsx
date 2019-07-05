import React from 'react';
import './App.scss';
import { SymbolContainer } from './containers/symbol.container';

const App: React.FC = () => {
	return (
		<div className="app__container">
			<section className="section">
				<h1 className="title">Currency converter</h1>
				<div className="section__content">
					<SymbolContainer />
				</div>
			</section>
			<section className="section">
				<h1 className="title">Exchange Rates</h1>
				<div className="section__content">
				</div>
			</section>
		</div>
	);
};

export default App;
