import React from "react";

import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";


const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                HCI-Lab
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/home" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/request" activeStyle>
                    Request
                </NavLink>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact
                </NavLink>
                
                <NavBtn>
                    <NavBtnLink to="/Login">Login</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;
