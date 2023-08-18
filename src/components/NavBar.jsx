import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { navLinks } from '../constants/index';

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar
				expand='md'
				container='sm'
			>
				<NavbarBrand href='/'>DENTO</NavbarBrand>
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
								<NavLink>{link.title}</NavLink>
							</NavItem>
						))}
					</Nav>
					<Button color='primary'>Booking Now</Button>
				</Collapse>
			</Navbar>
		</div>
	);
}

export default NavBar;
