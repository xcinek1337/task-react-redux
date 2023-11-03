const validateForm = state => {
	const errors = [];

	const isDateCorrect = () => {
		const pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
		return pattern.test(state.date);
	};

	const isTimeCorrect = () => {
		const pattern = /^[0-9]{2}:[0-9]{2}$/;
		return pattern.test(state.time);
	};

	const isFirstNameCorrect = () => {
		return state.firstName.length > 0;
	};

	const isLastNameCorrect = () => {
		return state.lastName.length > 0;
	};

	const isEmailCorrect = () => {
		const pattern = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
		return pattern.test(state.email);
	};
    
	if (!isDateCorrect()) {
		errors.push('Popraw wprowadzoną datę');
	}

	if (!isTimeCorrect()) {
		errors.push('Popraw wprowadzoną godzinę');
	}

	if (!isFirstNameCorrect()) {
		errors.push('Wprowadź imię');
	}

	if (!isLastNameCorrect()) {
		errors.push('Wprowadź nazwisko');
	}

	if (!isEmailCorrect()) {
		errors.push('Wprowadź poprawny adres email');
	}
	return errors;
};

export default validateForm;
