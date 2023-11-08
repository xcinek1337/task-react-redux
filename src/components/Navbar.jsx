import React from 'react';

import '../style/navbar.scss';

const Navbar = () => {
	return (
		<nav className='nav'>
			<div className='nav__wrapper'>
				<div className='nav__logo-cointainer'>
					<i className='fa-regular fa-calendar-days'></i>
					<span className='nav__logo'>Calendar.io</span>
				</div>
				<ul className='nav__link-list'>
					<a className='nav__link nav__link--active' href=''>
						Home
					</a>
					<a className='nav__link' href=''>
						Availability
					</a>
					<a className='nav__link' href=''>
						Integrations
					</a>
					<a className='nav__link' href=''>
						Help
					</a>
					<a className='nav__link' href=''>
						Account
					</a>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
