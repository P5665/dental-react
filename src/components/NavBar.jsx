import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { navLinks } from '../constants/index';
import { NavLink } from 'react-router-dom';
import DentoLogo from '../assets/core-img/logo.png';

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState('/');

	const toggle = () => setIsOpen(!isOpen);
	// TODO probably want to break down the NavItem and the DropDown into their own components and pass list of links --Would only ever do 2 deep dropdown1-->dropdown2.  Need to clean up mobile nav and might make hover show dropdowns vs clicks
	return (
		<Navbar
			color='white'
			light
			expand='md'
			container='sm'
			className='main-navbar sticky-top'
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
					{navLinks.map((link, index) =>
						link.dropdown ? (
							// First layer Drop Down
							<UncontrolledDropdown
								nav
								inNavbar
								key={index}
							>
								<DropdownToggle
									nav
									caret
									className='text-dark fw-semibold'
								>
									{link.title}
								</DropdownToggle>
								<DropdownMenu end>
									{link.dropdown.map((dropdownLink, index) =>
										dropdownLink.dropdown ? (
											// Second/Nested Dropdown
											<UncontrolledDropdown
												nav
												inNavbar
												key={index}
												className='dropdown-item nav-link'
											>
												<DropdownToggle
													nav
													caret
													className='text-dark fw-semibold'
												>
													{dropdownLink.title}
												</DropdownToggle>
												<DropdownMenu end>
													{dropdownLink.dropdown.map((subLink) => (
														<DropdownItem
															tag={'button'}
															key={subLink.id}
															className={`${active === subLink.id ? 'bg-primary text-white' : 'text-dark'} fw-semibold `}
														>
															<NavLink
																className={`${active === subLink.id ? 'bg-primary text-white' : 'text-dark'} nav-link fw-semibold `}
																to={subLink.id}
																onClick={() => setActive(subLink.id)}
															>
																{subLink.title}
															</NavLink>
														</DropdownItem>
													))}
												</DropdownMenu>
											</UncontrolledDropdown>
										) : (
											// First dropdown layer - not nested
											<DropdownItem
												key={index}
												className={`${active === dropdownLink.id ? 'bg-primary text-white' : ''} nav-link fw-semibold`}
											>
												<NavLink
													className={`${active === dropdownLink.id ? 'bg-primary text-white' : ''} nav-link fw-semibold text-dark`}
													to={dropdownLink.id}
													onClick={() => setActive(dropdownLink.id)}
												>
													{dropdownLink.title}
												</NavLink>
											</DropdownItem>
										)
									)}
								</DropdownMenu>
							</UncontrolledDropdown>
						) : (
							// Normal top Level Nav
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
				<Button color='primary'>Booking Now</Button>
			</Collapse>
		</Navbar>
	);
}

export default NavBar;
