import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadMeetingsAction, setDoneMeetingAction } from './actions/calendar';
import { deleteMeetingAPI, setDoneMeetingAPI } from './providers/meetingsApi';
import '../style/mainList.scss';

import Searcher from './Searcher';
import { render } from 'react-dom';

const CalendarList = () => {
	const dispatch = useDispatch();
	const meetings = useSelector(state => state.meetings);
	
	const [inputValue, setInputValue] = useState('');

	const deleteMeeting = id => {
		const updatedMeetings = meetings.filter(meet => meet.id !== id);
		dispatch(loadMeetingsAction(updatedMeetings));
		deleteMeetingAPI(id);
	};

	const setDoneMeeting = id => {
		const isDoneTrue = { isDone: true };

		setDoneMeetingAPI(isDoneTrue, id);
		dispatch(setDoneMeetingAction(isDoneTrue, id));
	};

	const renderMeetingsItem = itemData => {
		return (
			<li
				className={`item main__meeting-item ${itemData.isDone ? 'done' : ''}`}
				style={{ display: itemData.isDone ? 'none' : 'block' }}
				key={itemData.id}
			>
				<p className='item__name-info'>
					{itemData.firstName} {itemData.lastName}
				</p>

				<p className='item__date-info'>
					{itemData.date} {itemData.time}
				</p>
				<a className='item__mail' href={`mailto:${itemData.email}`}>
					send a email
				</a>
				<div className='item__btns-div'>
					<button className='item__btn' onClick={() => deleteMeeting(itemData.id)}>
						x
					</button>
					<button className='item__btn' onClick={() => setDoneMeeting(itemData.id)}>
						done
					</button>
				</div>
			</li>
		);
	};

	const renderMeetings = () => {
		if (inputValue.length > 0) {
			const filteredMeetings = meetings.filter(meeting => {
				const formattedValue = inputValue.trim().toLowerCase();
				const firstName = meeting.firstName.toLowerCase();
				const lastName = meeting.lastName.toLowerCase();

				return firstName.includes(formattedValue) || lastName.includes(formattedValue);
			});
		
			return filteredMeetings;
		}
		return meetings;
	};

	return (
		<main className={'main'}>
			<div className='main__wrapper'>
				<Searcher inputValue={inputValue} onChange={setInputValue} />
				<ul className={'main__meet-list'}>{renderMeetings().map(item => renderMeetingsItem(item))}</ul>
			</div>
		</main>
	);
};

export default CalendarList;
