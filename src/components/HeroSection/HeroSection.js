import styled from "styled-components";
import * as Variable from "../../Variables";
export const Container = styled.div`
  height: 657px;
  font-family: ${Variable.FontNoto};
  width: 100%;
  
`;

export const ImgHero = styled.div`
  overflow-x: visible !important;
  height: 657px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    @media screen and (${Variable.mobile}) {
      object-fit: cover;
    }
  }
`;
export const Content = styled.div`
  position: absolute;
  z-index: 1;
  top: 17%;
  padding:0 335px;
 @media screen and (${Variable.bigDestop}) {
   padding:0 100px;
    top: 25%;
   
  }
  @media screen and (${Variable.laptop}) {
    left: 50%;
    top: 13%;
    transform: translateX(-50%);
    padding:0;
  }
  @media screen and (${Variable.tablet}) {
    padding:0;
    left: 50%;
    top: 15%;
    transform: translateX(-50%);
  }
  @media screen and (${Variable.mobile}) {
    left: 50%;
    top: 25%;
    padding:0;
    transform: translateX(-50%);
  }
  @media screen and (max-width:320px) {
    left: 50%;
    top: 35%;
    padding:0;
    transform: translateX(-50%);
  }
  overflow-x: visible !important;
`;
export const Title = styled.div`
  h4 {
    overflow-y: hidden !important;
    font-size: 50px;
    line-height: 65px;
    color: ${Variable.BgDefault};
    z-index: 10;
    @media screen and (${Variable.mobile}) {
      font-size: 28px;
      line-height: 45px;
    }
    @media screen and (max-width:320px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

export const Detail = styled.div`
  margin-top: 50px;
  font-size: ${Variable.FsHero};
  line-height: 24px;
  color: ${Variable.BgDefault};
  @media screen and (${Variable.mobile}) {
    margin-top: 20px;
  }
  overflow-x: visible !important;
`;
export const Button = styled.div`
  display: flex;
  margin-top: 70px;
  @media screen and (${Variable.mobile}) {
    margin-top: 30px;
  }
  overflow-x: visible !important;
`;
export const TitleButton = styled.div`
  line-height: 40px;
  font-size: ${Variable.FsHero};
  color: ${Variable.BgDefault};
  cursor: pointer;
`;
export const ImgButton = styled.div`
  margin-left: 20px;
  width: 45px;
  height: 45px;
  border-radius: 99px;
  z-index:3;
  position: relative;
  background-color: ${Variable.BgDefault};
  transition: 300ms;

  @media screen and (${Variable.mobile}) {
    width: 35px;
    height: 35px;
  }
  img {
    cursor: pointer;
    object-fit: contain;
    width: 35px;
    height: 35px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (${Variable.mobile}) {
      width: 27px;
    }
  }
`;
