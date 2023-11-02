export const loadMeetingsAction = meetings => {
	return {
		type: 'loadMeetings',
		payload: {
			meetings: meetings,
		},
	};
};
export const saveMeetingAction = meet => {
	return {
		type: 'saveMeeting',
		payload: {
			meet: meet,
		},
	};
};
