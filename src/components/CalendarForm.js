import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { saveMeetingAction } from './actions/calendar';
import { saveMeetingInApi } from './providers/meetingsApi';
import validateForm from './providers/validateForm';


const CalendarForm = () => {
	const dispatch = useDispatch();

	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		date: '',
		time: '',
		id: '',
		errors: [],
	});

	const isFieldNameCorrect = name => {
		const fieldsData = getFieldsData();
		console.log(typeof fieldsData[name] !== 'undefined');
		return typeof fieldsData[name] !== 'undefined';
	};

	const handleFieldChange = e => {
		if (isFieldNameCorrect(e.target.name)) {
			setState({ ...state, [e.target.name]: e.target.value, id: uuidv4() });
		}
	};
	
	const getFieldsData = () => {
		const fieldsData = { ...state };
		delete fieldsData['errors'];
		return fieldsData;
	};

	const handleSubmit = e => {
		e.preventDefault();

		const errors = validateForm(state);
		setState({ ...state, errors });

		if (errors.length === 0) {
			saveMeeting();
			clearFormFields();
		}
	};


	const saveMeeting = () => {
		dispatch(saveMeetingAction(getFieldsData()));

		saveMeetingInApi(getFieldsData());
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

	function renderErrors() {
		if (state.errors) {
			return state.errors.map((err, index) => <li key={index}>{err}</li>);
		}
	}

	function clearFormFields() {
		const fieldsData = getFieldsData();
		for (const prop in fieldsData) {
			fieldsData[prop] = '';
		}

		setState(fieldsData);
	}
};

export default CalendarForm;
