import React from 'react';
import { useSelector } from 'react-redux';

const CalendarList = () => {
	const meetings = useSelector(state => state.meetings);
	const renderMeetingsItem = itemData => {
		return (
			<li key={itemData.id}>
				{itemData.date} {itemData.time}
				<a href={`mailto: ${itemData.email}`}>
					{' '}
					{itemData.firstName} {itemData.lastName}
				</a>
			</li>
		);
	};
	const renderMeetingsList = () => {
		return meetings.map(item => renderMeetingsItem(item));
	};
	return <ul>{renderMeetingsList()}</ul>;
};

export default CalendarList;