import React, { useState } from 'react';
import '../style/searcher.scss';

const Searcher = ({ onChange }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = event => {
		const value = event.target.value;
		setInputValue(value);
		onChange(inputValue);
	};

	return (
		<div className='searcher'>
			<input
				onChange={handleInputChange}
				className='searcher__input'
				type='text'
				value={inputValue}
				placeholder=' 🔍  Search for meeting...'
			/>
		</div>
	);
};

export default Searcher;
