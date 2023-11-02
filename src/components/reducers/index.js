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
		default:
			return state;
	}
};

export default reducer;
