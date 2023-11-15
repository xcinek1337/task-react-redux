const validate = (state, values) => {
	const errors = [];

	state.forEach(({ name, validation }) => {
		const value = values[name];
		if (validation.isReq && value.trim() === '') {
			errors.push(`field ${name} is required .`);
		}
		if (validation.regex && !validation.regex.test(value)) {
			errors.push(`field ${name} is not completed correctly.`);
		}
	});
	
	return errors;
};
export default validate;
