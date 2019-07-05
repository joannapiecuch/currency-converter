import React, { FC } from 'react';
import './Form.scss';

interface Props {
	input: any;
	meta: any;
	options?: any;
	placeholder: string;
	type: string;
}

export const Input: FC<Props> = ({input, meta, type, placeholder}: Props) => {

	return (
		<div className="form__group">
			<label className="form__label">{placeholder}</label>
			<input
				name="from"
				type={type}
				value='Euro'
				placeholder="From"
				className="form__field"
			/>
			<span className="highlight" />
		</div>
	);
};
