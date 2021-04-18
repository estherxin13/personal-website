import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks } from './NavBarElements'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: 'black'
    },
});

const Navbar = ({ toggle }) => {
    const styles = useStyles();

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <Link className={styles.link} to={'/'}>E S T H E R&nbsp;&nbsp;&nbsp; X I N</Link>
                    </NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks>
                                <Link className={styles.link} to={'/about'}>about</Link>
                            </NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='/about'>projects</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='about'>community</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='about'>resume</NavLinks>
                        </NavItems>
                    </NavMenu>
                </NavbarContainer>

            </Nav>
        </>
    )
}

export default Navbar;