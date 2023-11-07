const loadMeetingsAction = meetings => {
	return {
		type: 'loadMeetings',
		payload: {
			meetings: meetings,
		},
	};
};
const saveMeetingAction = meet => {
	return {
		type: 'saveMeeting',
		payload: {
			meet: meet,
		},
	};
};
const setDoneMeetingAction = (updatedData, meetingId) => {
	console.log(updatedData);
	return {
		type: 'setFlagToTrue',
		payload: {
			meetingId,
			updatedData,
		},
	};
};

export { loadMeetingsAction, saveMeetingAction, setDoneMeetingAction };
