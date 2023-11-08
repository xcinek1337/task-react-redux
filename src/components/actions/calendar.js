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

const openPopupAction = () => {
	return {
		type: 'openPopup',
		payload: {},
	};
};

export { loadMeetingsAction, saveMeetingAction, setDoneMeetingAction, openPopupAction };
