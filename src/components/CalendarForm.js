import React from 'react';

import CalendarFormHandler from './CalendarFormHandler';

const CalendarForm = () => {
	 const fields= [ 
		{ name: 'firstName', type: 'text', placeHolder: '', validation: { isReq: true } },
		{ name: 'lastName', type: 'text', placeHolder: '', validation: {  isReq: true } },
		{ name: 'email', type: 'text', placeHolder: 'nazwa@poczty.pl', validation: { regex: /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/ , isReq: true } },
		{ name: 'date', type: 'text', placeHolder: 'RRRR-MM-DD', validation: { regex: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/ , isReq: true } },
		{ name: 'time', type: 'text', placeHolder: 'HH:MM', validation: { regex: /^[0-9]{2}:[0-9]{2}$/ , isReq: true } },	
	]

	return <CalendarFormHandler fields={fields} />
};

export default CalendarForm;

