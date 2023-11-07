const initalState = {
	meetings: [],
};

const reducer = (state = initalState, action) => {
	switch (action.type) {
		case 'loadMeetings':
			return {
				...state,
				meetings: action.payload.meetings,
			};
		case 'saveMeeting':
			return {
				...state,
				meetings: [...state.meetings, action.payload.meet],
			};
		case 'setFlagToTrue':
			const { meetingId, updatedData } = action.payload;
			const updatedMeetings = state.meetings.map(meeting => {
				if (meeting.id === meetingId) {
					return { ...meeting, ...updatedData };
				}
				return meeting;
			});
			return {
				...state,
				meetings: updatedMeetings,
			};
		default:
			return state;
	}
};

export default reducer;
