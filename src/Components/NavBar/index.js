import React from 'react'
import {Nav,NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks  } from  './NavBarElements'
import {FaBars} from 'react-icons/fa'


const Navbar = ({toggle}) => {
    return (
    <>
       <Nav>
            <NavbarContainer>
                <NavLogo to ='/'> E S T H E R&nbsp;&nbsp;&nbsp; X I N</NavLogo>
                <MobileIcon onClick = {toggle} >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItems>
                        <NavLinks to ='about'>about</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to ='about'>projects</NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to ='about'>community</NavLinks>
                    </NavItems>
                </NavMenu>      
            </NavbarContainer>

        </Nav>  
    </>
    )
}

export default Navbar;