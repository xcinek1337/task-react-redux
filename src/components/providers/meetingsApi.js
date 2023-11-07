const apiUrl = 'http://localhost:3005/meetings';

const loadMeetingsAPI = async () => {
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

const saveMeetingAPI = async meet => {
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

const deleteMeetingAPI = async id => {
	try {
		const resp = await fetch(`${apiUrl}/${id}`, {
			method: 'DELETE',
		});
		if (resp.ok) {
			return await resp.json();
		} else {
			throw new Error('Network error!');
		}
	} catch (err) {
		console.error(err);
	}
};

const setDoneMeetingAPI = async (change, id) => {
	try {
		const resp = await fetch(`${apiUrl}/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(change),
		});
		if (resp.ok) {
			return resp.json();
		} else {
			throw new Error('Network error!');
		}
	} catch (err) {
		console.error(err);
	}
};

export { loadMeetingsAPI, saveMeetingAPI, deleteMeetingAPI, setDoneMeetingAPI };
