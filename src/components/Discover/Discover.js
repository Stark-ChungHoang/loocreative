import styled from "styled-components"
import * as Variable from "../../Variables"
export const Container = styled.div`
    height: 401px;
    background-color: ${Variable.BgGray};
    font-family: ${Variable.FontNoto};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: visible !important;
    @media screen and (${Variable.tablet}) {
        height: 100%;
        padding: 30px 0;
    }
`
export const Intro = styled.div`
    font-size: 18px;
    line-height: 30px;
    color:${Variable.CLButton};
 
`

export const Title = styled.div`
 overflow-x: visible !important;
    margin-top: 30px;
    font-size: 40px;
    line-height: 55px;
    font-weight: normal;
    text-align: center;
    @media screen and (${Variable.tablet}) {
    font-size: 25px;
    line-height: 40px;
    padding:0 25px;
    }
    @media screen and (${Variable.mobile}) {
        margin-top: 15px;
    font-size: 20px;
    line-height: 30px;
    padding:0 25px;
    }
    @media screen and (max-width: 320px) {
        margin-top: 15px;
    font-size: 15px;
    line-height: 20px;
    padding:0 25px;
    }
`
export const Button = styled.div`
    color: ${Variable.BgDefault};
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color:${Variable.CLButton};
    height: 50px;
    padding: 16px 0;
    width: 216px;
    border-radius: 25px;
    margin-top: 30px; 
    cursor: pointer;
    transition: 400ms;
    &:hover {
    background-color: ${Variable.BgButton}
    }
    overflow-x: visible !important;
    @media screen and (${Variable.mobile}) {
        height: 40px;
        width: 180px;
    }
`