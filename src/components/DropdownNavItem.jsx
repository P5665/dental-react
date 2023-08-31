import React, { useState } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem } from 'reactstrap';

import { NavLink } from 'react-router-dom';

const DropdownNavItem = ({ link, activePage, setActivePage }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<UncontrolledDropdown
			nav
			inNavbar
			onMouseEnter={toggle}
			onMouseLeave={toggle}
		>
			<DropdownToggle
				nav
				caret
				className='text-dark fw-semibold'
			>
				{link.title}
			</DropdownToggle>
			<DropdownMenu end>
				{link.dropdown.map((subLink) => (
					<DropdownItem key={subLink.id}>
						{subLink.dropdown ? (
							<UncontrolledDropdown
								nav
								inNavbar
							>
								<DropdownToggle
									nav
									caret
									className='text-dark fw-semibold'
								>
									{subLink.title}
								</DropdownToggle>
								<DropdownMenu>
									{subLink.dropdown.map((subLink2) => (
										<DropdownItem
											key={subLink2.id}
											tag={'div'}
										>
											<NavLink
												key={subLink2.id}
												to={subLink2.id}
												onClick={() => setActivePage(subLink2.id)}
												className={`${activePage === subLink2.id ? 'bg-primary text-white' : 'text-dark'} nav-link fw-semibold dropdown-item `}
											>
												{subLink2.title}
											</NavLink>
										</DropdownItem>
									))}
								</DropdownMenu>
							</UncontrolledDropdown>
						) : (
							<NavLink
								to={subLink.id}
								onClick={() => setActivePage(subLink.id)}
								className={`${activePage === subLink.id ? 'bg-primary text-white' : 'text-dark'} nav-link fw-semibold`}
							>
								{subLink.title}
							</NavLink>
						)}
					</DropdownItem>
				))}
			</DropdownMenu>
		</UncontrolledDropdown>
	);
};

export default DropdownNavItem;
