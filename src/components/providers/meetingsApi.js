const apiUrl = 'http://localhost:3005/meetings';



const loadMeetingsAPI = async () => {
	try {
		const resp = await fetch(apiUrl);
		return await handlingResponse(resp);
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
		return await handlingResponse(resp);
	} catch (err) {
		console.log(err);
	}
};

const deleteMeetingAPI = async id => {
	try {
		const resp = await fetch(`${apiUrl}/${id}`, {
			method: 'DELETE',
		});
		return await handlingResponse(resp);
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
		return await handlingResponse(resp);
	} catch (err) {
		console.error(err);
	}
};

async function handlingResponse(resp) {
	if (resp.ok) {
		return await resp.json();
	} else {
		throw new Error('Network error!');
	}
}
export { loadMeetingsAPI, saveMeetingAPI, deleteMeetingAPI, setDoneMeetingAPI };
