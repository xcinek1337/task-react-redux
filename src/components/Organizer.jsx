import React, { useState } from 'react';

import CalendarForm from './CalendarForm';

import '../style/organizer.scss';

const Organizer = () => {
	const [isOpen, setIsOpen] = useState(true);
	const [popup, setPopup] = useState(false);
	const handleClick = () => {
		setIsOpen(!isOpen);
		console.log(isOpen);
	};
	const togglePopup = () => {
		setPopup(!popup);
	};

	return (
		<header className='organizer'>
			<div className='organizer__wrapper'>
				<button onClick={handleClick} className='organizer__header'>
					My Calendly <span className='organizer__arrow'> &#11167;</span>
				</button>
				<ul className={`organizer__list ${isOpen ? 'organizer__list-open' : ''}`}>
					<button className='organizer__item'>Meetings Types</button>
					<button className='organizer__item organizer__item--active'>Schedueld Meetings</button>
					<button className='organizer__item'>WorkFlows</button>
					<button className='organizer__item'>Routing Forms</button>
				</ul>

				<button className='organizer__btn' onClick={togglePopup}>
					+ Create
				</button>
			</div>
			{popup && (
				<div className='organizer__popup'>
					<CalendarForm />
					<button onClick={() => setPopup(!popup)}>close</button>
				</div>
			)}
		</header>
	);
};
export default Organizer;
