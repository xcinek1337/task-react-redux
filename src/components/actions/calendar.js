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
	return {
		type: 'setFlagToTrue',
		payload: {
			meetingId,
			updatedData,
		},
	};
};

const togglePopupAction = () => {
	return {
		type: 'togglePopup',
		
	};
};

export { loadMeetingsAction, saveMeetingAction, setDoneMeetingAction, togglePopupAction };
