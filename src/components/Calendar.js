import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';

import { loadMeetingsAction } from './actions/calendar';
import { loadMeetingsToRedux } from './providers/meetingsApi';

const Calendar = () => {
	const meetings = useSelector(state => state.meetings);
	const dispatch = useDispatch();

	useEffect(() => {
		loadMeetingsToRedux().then(data => {
			dispatch(loadMeetingsAction(data));
		});
	}, []);

	return (
		<>
			{meetings === undefined ? <p>Oczekiwanie na dane...</p> : null}
			<section>
				<CalendarList />
				<CalendarForm />
			</section>
		</>
	);
};

export default Calendar;
