import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import { saveMeetingAction } from './actions/calendar';
import { saveMeetingAPI } from './providers/meetingsApi';

const CalendarFormHandler = ({ fields }) => {
	const init = { date: '', email: '', firstName: '', lastName: '', time: '', isDone: false };

	const reduxDispatch = useDispatch();
	const [state, dispatch] = useReducer(reducer, init);
	const [errors, setErrors] = useState([]);

	function reducer(state, action) {
		switch (action.type) {
			case 'change': {
				return { ...state, [action.key]: action.value };
			}
			case 'init': {
				return { ...state, ...action.data };
			}
			default:
				return state;
		}
	}

	const handleSubmit = e => {
		e.preventDefault();

		const validationErrors = validate(fields, state);
		if (validationErrors.length === 0) {
			const newMeetingWithId = { ...state, id: uuidv4() };
			reduxDispatch(saveMeetingAction(newMeetingWithId));
			saveMeetingAPI(newMeetingWithId);

			dispatch({ type: 'init', data: init });
		}
	};
	const validate = (state, values) => {
		const errors = [];

		state.forEach(({ name, validation }) => {
			const value = values[name];
			if (validation.isReq && value.trim() === '') {
				errors.push(`pole ${name} jest wymagane.`);
			}
			if (validation.regex && !validation.regex.test(value)) {
				errors.push(`pole ${name} jest wypelnione nieprawidlowo.`);
			}
		});
		setErrors(errors);
		return errors;
	};
	const renderErros = () => {
		return (
			<ul className='form__error-list'>
				{errors.map((message, index) => (
					<li className='form__error-item' key={index}>
						{message}
					</li>
				))}
			</ul>
		);
	};

	const renderFieldList = () => {
		return fields.map(({ name, type, placeHolder }) => {
			const value = state[name];

			return (
				<div key={name || type}>
					<label className='form__label' htmlFor={name}>
						{name}
						<input
							placeholder={placeHolder}
							onChange={e => dispatch({ type: 'change', key: name, value: e.target.value })}
							type={type}
							name={name}
							id={name}
							value={value}
						/>
					</label>
				</div>
			);
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			{renderErros()}
			{renderFieldList()}
			<input type='submit' value='hejka tu lenka' />
		</form>
	);
};

export default CalendarFormHandler;
