import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { navLinks } from '../constants/index';
import { NavLink } from 'react-router-dom';
import DropdownNavItem from './DropdownNavItem';
import DentoLogo from '../assets/core-img/logo.png';

function NavBarTest() {
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState('/');

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Navbar
			color='light'
			light
			expand='md'
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
					{navLinks.map((link) =>
						link.dropdown ? (
							<DropdownNavItem
								key={link.id}
								link={link}
								activePage={active}
								setActivePage={setActive}
							/>
						) : (
							<NavItem key={link.id}>
								<NavLink
									to={link.id}
									className={`${active === link.id ? 'border-bottom border-primary border-3' : ''} nav-link text-dark fw-semibold`}
									onClick={() => setActive(link.id)}
								>
									{link.title}
								</NavLink>
							</NavItem>
						)
					)}
				</Nav>
			</Collapse>
		</Navbar>
	);
}
export default NavBarTest;
