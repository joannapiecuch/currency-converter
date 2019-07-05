import React from 'react';
import { FC, useEffect } from 'react';
import { Currency } from '../models/currency';
import { CurrencySymbol } from '../models/currency-symbol';
import { Form } from 'react-final-form';
import './CurrencyPage.scss';

interface Props {
	data: CurrencySymbol,
	getData: () => void;
}

export const CurrencyPage: FC<Props> = ({getData, data}: Props) => {
	useEffect(() => getData(), []);

	const handleSubmit = async (values: any, event: any) => {
	};

	const test = [];
	Object.keys(data.symbols).map(item => {
		test.push(`${item} (${data.symbols[item]})`);
	});

	return (
		<div className="container">
			<div className="form__wrapper">
				<Form onSubmit={handleSubmit}
				      render={({handleSubmit, form}) => (
					      <form onSubmit={handleSubmit}>
						      <div className="form__col">
							      <div className="form__group">
								      <label className="form__label">From</label>
								      <input
									      name="from"
									      value='Euro'
									      placeholder="From"
									      className="form__field"
								      />
								      <span className="highlight"/>
							      </div>
							      <div className="form__group">
								      <input
									      name="amount"
									      value='100'
									      className="form__field form__field--big"
								      />
								      <span className="highlight"/>
							      </div>
						      </div>
						      <div className="currency-arrow">
						      </div>
						      <div className="form__col">
							      <div className="form__group">
								      <label className="form__label">To</label>
								      <input
									      name="to"
									      value='USD'
									      placeholder="To"
									      className="form__field"
								      />
								      <span className="highlight"/>
							      </div>
							      <div className="form__group">
								      <input
									      name="amount"
									      value=''
									      className="form__field form__field--big"
								      />
								      <span className="highlight"/>
							      </div>
						      </div>
					      </form>
				      )}
				/>
			</div>
		</div>
	);
};
