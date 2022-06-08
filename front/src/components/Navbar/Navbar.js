import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles.js';
import { useNavigate } from 'react-router-dom';
import { data } from '../../data/NavbarData';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Navbar = () => {
	const [show, setShow] = useState(false);
	const navigation = useNavigate()
	const handleClick = () => setShow(!show);
	const [language, setlanguage] = useState(10);

	const handleChange = (event) => {
		console.log(event.target.value);
		setlanguage(event.target.value);
	};

	const closeMobileMenu = (to, id) => {
		navigation(to)
		setShow(false);
	};

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon src="/Mass tech logo.png" alt="logo" />
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{data.map((el, index) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
									{el.text}
								</NavLinks>
							</NavItem>
						))}
						<FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
							<Select
								labelId="demo-simple-select-standard-label"
								id="demo-simple-select-standard"
								value={language}
								onChange={handleChange}
								label="language"
								sx={{ color: 'white' }}
							>
								<MenuItem value={10}>Монгол</MenuItem>
								<MenuItem value={20}>English</MenuItem>
							</Select>
						</FormControl>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
