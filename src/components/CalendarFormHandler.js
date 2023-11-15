import React, { useReducer, useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import validate from './validateForm';
import { saveMeetingAction, togglePopupAction } from './actions/calendar';
import { saveMeetingAPI } from './providers/meetingsApi';

import '../style/form.scss';

const CalendarFormHandler = ({ fields }) => {
	const init = { date: '', email: '', firstName: '', lastName: '', time: '', isDone: false };

	const formRef = useRef(null);
	const dispatch = useDispatch();
	const [state, dispatchState] = useReducer(reducer, init);
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
		setErrors(validationErrors);
		
		if (validationErrors.length === 0) {
			const newMeetingWithId = { ...state, id: uuidv4() };
			dispatch(saveMeetingAction(newMeetingWithId));
			saveMeetingAPI(newMeetingWithId);
			dispatch(togglePopupAction());
			dispatchState({ type: 'init', data: init });
		}
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
							className='form__input'
							placeholder={placeHolder}
							onChange={e => dispatchState({ type: 'change', key: name, value: e.target.value })}
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
		<form className='form' onSubmit={handleSubmit} ref={formRef}>
			<h2 className='form__header'>schedule a meeting</h2>
			{renderErros()}
			<div className='form__inputs-div'> {renderFieldList()}</div>
			<input className='form__submit' type='submit' value='submit' />

			<button className='form__cancel' type='button' onClick={() => dispatch(togglePopupAction())}>
				x
			</button>
		</form>
	);
};

export default CalendarFormHandler;
