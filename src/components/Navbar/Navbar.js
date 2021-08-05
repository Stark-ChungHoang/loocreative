import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import * as Variable from "../../Variables";
export const Nav = styled.nav`
  background-color: ${Variable.BgDefault};
  color: ${Variable.TextDefault};
  height: 108px;
  display: flex;
  padding: 0 335px;
  position: fixed;
  font-family: ${Variable.FontNoto};
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  @media screen and (${Variable.bigDestop}) {
    padding: 0 100px;
  }
  @media screen and (${Variable.laptop}) {
    padding: 0 50px;
  }
  @media screen and (${Variable.tablet}) {
    padding: 0 30px;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 108px;
  z-index: 1;
  width: 100%;
`;
export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;

  @media screen and (${Variable.destop}) {
    padding: 0;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (${Variable.laptop}) {
    color: ${Variable.TextDefault};
    display: block;
    position: absolute;
    padding-top: 7px;
    padding-left: 7px;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (${Variable.laptop}) {
    display: none;
  }
`;
export const NavItem = styled.li``;

export const NavLinks = styled(LinkS)`
  color: ${Variable.TextDefault};
  font-size: ${Variable.FsNav};
  line-height: ${Variable.LineHeightNav};
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 20px;
  padding: 38px 0;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid ${Variable.CLButton};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (${Variable.laptop}) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  color: ${Variable.TextDefault};
  cursor: pointer;
  text-decoration: none;
  padding: 0 20px;
  font-size: 14px;
  line-height: 30px;
`;
