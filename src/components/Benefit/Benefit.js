import * as Variable from "../../Variables"
import styled from "styled-components"
export const Container = styled.div`
   height: 376px;
   background-color: ${Variable.CLButton};
   display: flex;
   align-items: center;
   justify-content: center;
   color: ${Variable.BgDefault};
   @media screen and (${Variable.laptop}) {
      padding:0 30px;
   }
   @media screen and (max-width:768px) {
      height: 100%;
      flex-direction: column;
      justify-content: flex-start;
      margin-bottom: 30px;
   }
`
export const Title = styled.div`
   width: 239px;
   height: 106px;
   font-size: 48px;
   line-height: 60px;
   font-family: ${Variable.FontMont};
   font-weight: bold;
   margin-right: 30px;
   @media screen and (${Variable.laptop}) {
      margin-right:0 ;
      width: 320px;
      padding:20px;
   }
   @media screen and (max-width:768px) {
      width: 100%;
   text-align: center;
   font-size: 38px;
   }
   @media screen and (max-width:380px) {
      width: 100%;
   font-size: 20px;
   }
   overflow-x: visible !important;
`
export  const Detail = styled.div`
   font-family: ${Variable.FontNoto};
   padding-left: 60px;
   margin-top: 30px;
 padding-bottom: 20px;
   width: 826px;
   height: 126px;
   font-size: 16px;
   line-height: 30px;
   font-weight: 300;
   @media screen and (max-width:768px) {
      width: 100%;
      padding:0 30px;
      margin-bottom: 30px;
   }
   @media screen and (${Variable.mobile}) {
      font-size: 13px;
      width: 100%;
      margin-top: 10px;
      margin-bottom: 200px;
   }
   overflow-x: visible !important;
`