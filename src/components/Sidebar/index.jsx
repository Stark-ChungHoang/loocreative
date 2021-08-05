import React from 'react'
import {SidebarContainer,Icon, CloseIcon,SidebarWrapper,SidebarLink,SidebarMenu,SideBtnWrap,SidebarRoute} from "./SIdebar"
function Sidebar({isOpen,toggle}) {
    return (
        
            <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
                {/* {ICON}  */}
                        <Icon onClick = {toggle}>
                            <CloseIcon />
                        </Icon>
                   {/* MENU       */}
                        <SidebarWrapper>
                            <SidebarMenu>
                                <SidebarLink onClick = {toggle} to="">서비스 소개</SidebarLink>
                                <SidebarLink onClick = {toggle} to="">법적효력·보안</SidebarLink>
                                <SidebarLink onClick = {toggle} to="">활용 분야</SidebarLink>
                                <SidebarLink onClick = {toggle} to="">이용 혜택</SidebarLink>
                                <SidebarLink onClick = {toggle} to="">요금 안내</SidebarLink>
                                <SidebarLink onClick = {toggle} to="">고객센터</SidebarLink>
                            </SidebarMenu>
                            <SideBtnWrap>
                                <SidebarRoute onClick = {toggle} to="/signup">고객센터</SidebarRoute>
                                <SidebarRoute onClick = {toggle} to="/signin">회원가입</SidebarRoute>
                            </SideBtnWrap>
                        </SidebarWrapper>
            </SidebarContainer>
       
    )
}

export default Sidebar
