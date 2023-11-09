import React, { useState } from 'react';
import '../style/searcher.scss';

const Searcher = ({ onChange, inputValue }) => {
	const handleInputChange = event => {
		const value = event.target.value;
		onChange(value);
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
