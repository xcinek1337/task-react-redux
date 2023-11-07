import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';
import Navbar from './Navbar';

import { loadMeetingsAction } from './actions/calendar';
import { loadMeetingsAPI } from './providers/meetingsApi';

const Calendar = () => {
	const meetings = useSelector(state => state.meetings);
	const dispatch = useDispatch();

	useEffect(() => {
		loadMeetingsAPI().then(data => {
			dispatch(loadMeetingsAction(data));
		});
	}, []);

	return (
		<>
		
			<Navbar />
			{meetings === undefined ? <p>Oczekiwanie na dane...</p> : null}
			<main>
				<CalendarList />
				<CalendarForm />
			</main>
		</>
	);
};

export default Calendar;
