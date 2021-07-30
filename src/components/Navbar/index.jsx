import React from 'react'
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo,MobileIcon,
    NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from "./Navbar"
function Navbar({toggle}) {
    return (
        <Nav id="nav">
                   <NavbarContainer>
                       <NavLogo  to = "/">
                           <img src="../../../logo-icon-1.svg" alt="" />
                          
                       </NavLogo>
                       <MobileIcon onClick = {toggle}>
                           <FaBars />
                       </MobileIcon>
                       <NavMenu>
                           <NavItem>
                               <NavLinks    smooth={true} duration={500} spy={true} exact="true" offset={-80} to="nav">서비스 소개</NavLinks>
                           </NavItem>
                           <NavItem>
                               <NavLinks  to="">법적효력·보안</NavLinks>
                           </NavItem>
                           <NavItem>
                               <NavLinks  to="">활용 분야</NavLinks>
                           </NavItem>
                           <NavItem>
                               <NavLinks  to="">이용 혜택</NavLinks>
                           </NavItem>
                           <NavItem>
                               <NavLinks  to="">요금 안내</NavLinks>
                           </NavItem>
                           <NavItem>
                               <NavLinks  to="">고객센터</NavLinks>
                           </NavItem>
                         
                       </NavMenu>
                       <NavBtn>
                       <NavBtnLink  to="/signup">고객센터</NavBtnLink>
                       <NavBtnLink  to="/signin">회원가입</NavBtnLink>
                       </NavBtn>
                   </NavbarContainer>
               </Nav>
          
    )
}

export default Navbar
