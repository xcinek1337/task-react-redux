import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveMeetingAction } from './actions/calendar';


const CalendarForm = props => {
	const dispatch = useDispatch();
	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		date: '',
		time: '',
		errors: [],
	});

	const handleSubmit = e => {
		e.preventDefault();

		const errors = validateForm();
		setState({ ...state, errors });

		if (errors.length === 0) {
			saveMeeting();
			clearFormFields();
		}
	};

	const validateForm = () => {
		const errors = [];

		if (!isDateCorrect()) {
			errors.push('Popraw wprowadzoną datę');
		}

		if (!isTimeCorrect()) {
			errors.push('Popraw wprowadzoną godzinę');
		}

		if (!isFirstNameCorrect()) {
			errors.push('Wprowadź imię');
		}

		if (!isLastNameCorrect()) {
			errors.push('Wprowadź nazwisko');
		}

		if (!isEmailCorrect()) {
			errors.push('Wprowadź poprawny adres email');
		}

		return errors;
	};

	const isDateCorrect = () => {
		const pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
		return pattern.test(state.date);
	};

	const isTimeCorrect = () => {
		const pattern = /^[0-9]{2}:[0-9]{2}$/;
		return pattern.test(state.time);
	};

	const isFirstNameCorrect = () => {
		return state.firstName.length > 0;
	};

	const isLastNameCorrect = () => {
		return state.lastName.length > 0;
	};

	const isEmailCorrect = () => {
		const pattern = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
		return pattern.test(state.email);
	};

	const getFieldsData = () => {
		const fieldsData = { ...state };
		delete fieldsData['errors'];
		return fieldsData;
	};
	const clearFormFields = () => {
		const fieldsData = getFieldsData();
		for (const prop in fieldsData) {
			fieldsData[prop] = '';
		}

		setState(fieldsData);
	};

	const isFieldNameCorrect = name => {
		const fieldsData = getFieldsData();
		return typeof fieldsData[name] !== 'undefined';
	};
	const handleFieldChange = e => {
		if (isFieldNameCorrect(e.target.name)) {
			setState({ ...state, [e.target.name]: e.target.value });
		}
	};

	const renderErrors = () => {
		if (state.errors) {
			return state.errors.map((err, index) => <li key={index}>{err}</li>);
		}
	};
	const saveMeeting = () => {
		const { saveMeeting } = props;
	
		// to nie dziala
        dispatch(saveMeetingAction(getFieldsData()));
		
        // a to dziala
        // saveMeeting(getFieldsData())
	};

	return (
		<form onSubmit={handleSubmit}>
			<ul>{renderErrors()}</ul>
			<div>
				<label>
					Data: <input name='date' onChange={handleFieldChange} value={state.date} placeholder='RRRR-MM-DD' />
				</label>
			</div>
			<div>
				<label>
					Godzina: <input name='time' onChange={handleFieldChange} value={state.time} placeholder='HH:MM' />
				</label>
			</div>
			<div>
				<label>
					Imię: <input name='firstName' onChange={handleFieldChange} value={state.firstName} />
				</label>
			</div>
			<div>
				<label>
					Nazwisko: <input name='lastName' onChange={handleFieldChange} value={state.lastName} />
				</label>
			</div>
			<div>
				<label>
					Email: <input name='email' onChange={handleFieldChange} value={state.email} placeholder='nazwa@poczty.pl' />
				</label>
			</div>
			<div>
				<input type='submit' value='Zapisz' />
			</div>
		</form>
	);
};

export default CalendarForm;
