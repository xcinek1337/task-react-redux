const apiUrl = 'http://localhost:3005/meetings';

const loadMeetingsToRedux = async () => {
	try {
		const resp = await fetch(apiUrl);
		if (resp.ok) {
			return await resp.json();
		} else {
			throw new Error('Network error!');
		}
	} catch (err) {
		console.error(err);
	}
};

const saveMeetingInApi = async meet => {
	try {
		const resp = await fetch(apiUrl, {
			method: 'POST',
			body: JSON.stringify(meet),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (resp.ok) {
			return await resp.json();
		} else {
			throw new Error('Network error!');
		}
	} catch (err) {
		console.log(err);
	}
};
export { loadMeetingsToRedux, saveMeetingInApi };
