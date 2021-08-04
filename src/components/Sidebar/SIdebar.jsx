import styled from "styled-components"
import {FaTimes} from "react-icons/fa"
import {Link as LinkR} from "react-router-dom"
import {Link as LinkS} from "react-scroll"
import * as Variable from "../../Variables"
export const SidebarContainer = styled.div`
        background: ${Variable.BgGray};
        width: 100%;
        height: 100vh;
        padding-top: 25px;
        position: fixed;
        transition: 300ms ease-in-out;
        opacity: ${({isOpen})=> (isOpen ?  "1": "0")};
        top:${({isOpen})=> (isOpen ? "0" : "-100%")};
        font-family: ${Variable.FontNoto};
         z-index:9999;
         @media screen and (${Variable.mobile}){
                 width: 100%;
         }
       
`
export const CloseIcon = styled(FaTimes)`
        color: ${Variable.TextDefault};
`
export const Icon = styled.div`
        background:transparent;
        font-size: 2rem;
        cursor: pointer;
        outline: none;
        display: flex;
        margin-bottom: 30px;
        justify-content: flex-end;
        margin-right:40px;
`
export const SidebarWrapper = styled.div`
        color:${Variable.TextDefault};
        width: 100%;
        /* padding:15px 15px; */
        cursor: pointer;
`
export const SidebarLink = styled(LinkS)`
        padding:20px 15px;
        display:flex;
        align-items: center;
        justify-content: center;
        font-size:16px; 
        line-height: 30px;
        text-decoration:none;
        list-style:none; 
        transition: 200ms ease-in-out;
        text-decoration: none;
        color:${Variable.TextDefault};
        cursor: pointer;

&:hover {
        color: ${Variable.BgButton};
        transition: 200ms ease-in-out;
    }
`
export const SideBtnWrap = styled.div`
        display:flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
`
export const SidebarMenu = styled.ul`
`
export const SidebarRoute = styled(LinkR)`
    display: flex;
    flex-direction: column;
    padding:16px 64px;
    color:#333333;
    font-size: 14px;
    line-height: 30px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 200ms ease-in-out;
        color: ${Variable.BgButton};
    }
`