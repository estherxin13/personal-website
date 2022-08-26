import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
} from "./SideBarElements";

const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    color: "black",
  },
});

const SideBar = ({ isOpen, toggle }) => {
  const styles = useStyles();

  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink onClick={toggle}>
              <Link className={styles.link} to={"/"}>
                work
              </Link>
            </SideBarLink>
            <SideBarLink onClick={toggle}>
              <Link className={styles.link} to={"/interests"}>
                about me
              </Link>
            </SideBarLink>
            <SideBarLink>
              <a
                className={styles.link}
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                resume
              </a>
            </SideBarLink>
          </SideBarMenu>
        </SideBarWrapper>
      </SidebarContainer>
    </>
  );
};

export default SideBar;
