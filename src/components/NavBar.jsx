import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { navLinks } from '../constants/index';
import { NavLink } from 'react-router-dom';
import DentoLogo from '../assets/core-img/logo.png';

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<header className='main-navbar sticky-top'>
			<Navbar
				expand='md'
				color='white'
				container='sm'
			>
				<NavbarBrand href='/'>
					<img
						src={DentoLogo}
						alt='logo'
					/>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse
					isOpen={isOpen}
					navbar
				>
					<Nav
						className='me-auto'
						navbar
					>
						{navLinks.map((link) => (
							<NavItem key={link.id}>
								<NavLink
									to={`${link.id}`}
									className='nav-link text-dark fw-semibold'
								>
									{link.title}
								</NavLink>
							</NavItem>
						))}
					</Nav>
					<Button color='primary'>Booking Now</Button>
				</Collapse>
			</Navbar>
		</header>
	);
}

export default NavBar;
