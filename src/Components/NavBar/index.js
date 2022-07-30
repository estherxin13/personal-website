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
                <Items className={styles.hover}>me</Items>
              </Link>
            </NavItems>
            <NavItems>
              <Link className={styles.link} to={"/interests"}>
                <Items className={styles.hover}>interests</Items>
              </Link>
            </NavItems>
            <NavItems>
              <a
                className={styles.link}
                href="https://drive.google.com/file/d/1qvyC1nVCIHWWVfDlR_Dnd08haYPp8bH1/view?usp=sharing"
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
