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
} from './NavbarStyles.js';
import { data } from '../../data/NavbarData';
import { FormControl, MenuItem, Select } from '@mui/material';
import Logo from '../../img/Mass tech logo.png'
import Mn from '../../img/mongolia.png'
import Usa from '../../img/usa.png'
import NavClick from './NavClick.js';
const Navbar = ({ language, handleChange }) => {
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);
	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/" onClick={() => window.scrollTo(0, 0)}>
						<NavIcon src={Logo} alt="logo" />
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{data.map((el, index) => {
							return <NavClick key={index} setShow={setShow} el={el} />
						})}
						{/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
							<Select
								labelId="demo-simple-select-standard-label"
								id="demo-simple-select-standard"
								value={language}
								onChange={(e) => handleChange(e)}
								label="language"
								sx={{ color: 'white' }}
							>
								<MenuItem value={10}>
									<img src={Mn} alt="#" style={style.img} />
								</MenuItem>
								<MenuItem value={20}>
									<img src={Usa} alt="#" style={style.img} />
								</MenuItem>
							</Select>
						</FormControl> */}
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};
const style = {
	img: {
		width: '30px', height: '30px', objectFit: 'contain'
	}
}
export default Navbar;
