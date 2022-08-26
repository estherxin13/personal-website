import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  Items,
} from "./NavBarElements";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "black",
  },
  hover: {
    "&:hover": {
      borderBottom: "3px solid black",
    },
  },
  logoHover: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "#3f6e4d",
    },
  },
});

const Navbar = ({ toggle }) => {
  const styles = useStyles();

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <Link className={styles.logoHover} to={"/"}>
              E S T H E R&nbsp;&nbsp;&nbsp; X I N
            </Link>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <Link className={styles.link} to={"/"}>
                <Items className={styles.hover}>work</Items>
              </Link>
            </NavItems>
            <NavItems>
              <Link className={styles.link} to={"/about-me"}>
                <Items className={styles.hover}>about me</Items>
              </Link>
            </NavItems>
            <NavItems>
              <a
                className={styles.link}
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Items className={styles.hover}>resume</Items>
              </a>
            </NavItems>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
