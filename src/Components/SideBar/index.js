import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink  } from  './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink>
                        home 
                    </SideBarLink>
                    <SideBarLink>
                        about
                    </SideBarLink>
                    <SideBarLink>
                        project
                    </SideBarLink>
                    <SideBarLink>
                        community
                    </SideBarLink>
            </SideBarMenu>
            </SideBarWrapper>
            </SidebarContainer>
        </>
    )
}

export default SideBar
