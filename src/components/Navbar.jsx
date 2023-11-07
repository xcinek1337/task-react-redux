import React from 'react';
// import '../style/navbar.scss';

const Navbar = () => {
	return (
		<nav className='nav'>
			<div className='nav__wrapper'>
				<div className='nav__logo'>logo</div>
				<li className='nav__link-list'>
					<a className='nav__link' href=''>
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
						account
					</a>
				</li>
			</div>
		</nav>
	);
};

export default Navbar;
