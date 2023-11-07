import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMeetingsAction, setDoneMeetingAction } from './actions/calendar';
import { deleteMeetingAPI, setDoneMeetingAPI } from './providers/meetingsApi';

const CalendarList = () => {
	const dispatch = useDispatch();
	const meetings = useSelector(state => state.meetings);

	const deleteMeeting = id => {
		const updatedMeetings = meetings.filter(meet => meet.id !== id);
		dispatch(loadMeetingsAction(updatedMeetings));
		deleteMeetingAPI(id);
	};

	const setDoneMeeting = id => {
		const isDoneTrue = { isDone: true };

		setDoneMeetingAPI(isDoneTrue, id);
		dispatch(setDoneMeetingAction(isDoneTrue, id));
	};

	const renderMeetingsItem = itemData => {
		return (
			<li style={{ display: itemData.isDone ? 'none' : 'block' }} key={itemData.id}>
				{itemData.date} {itemData.time}
				<a href={`mailto: ${itemData.email}`}>
					{' '}
					{itemData.firstName} {itemData.lastName}
				</a>
				<button onClick={() => setDoneMeeting(itemData.id)}>done</button>
				<button onClick={() => deleteMeeting(itemData.id)}>x</button>
			</li>
		);
	};
	const renderMeetingsList = () => {
		return meetings.map(item => renderMeetingsItem(item));
	};
	return <ul>{renderMeetingsList()}</ul>;
};

export default CalendarList;