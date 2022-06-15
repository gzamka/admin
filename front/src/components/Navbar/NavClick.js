import React from 'react'
import { NavItem } from './NavbarStyles'
import { useNavigate } from 'react-router-dom';
import '../../App.css'
export default function NavClick({ el, setShow }) {
    const path = window.location.pathname
    const navigation = useNavigate()
    const closeMobileMenu = (to) => {
        navigation(to)
        setShow(false);
        window.scrollTo(0, 0)
    };
    return (
        <>
            <NavItem>
                {<div className={path === el.to ? "activeNav" : "nav"} onClick={() => closeMobileMenu(el.to)}>
                    {el.text}
                </div>}
            </NavItem>
        </>
    )
}
