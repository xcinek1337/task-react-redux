import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CalendarList from './CalendarList';
import Navbar from './Navbar';
import Organizer from './Organizer';

import { loadMeetingsAction} from './actions/calendar';
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
			<Organizer />
			{meetings === undefined ? <p>Oczekiwanie na dane...</p> : null}
			<CalendarList />
		</>
	);
};

export default Calendar;
