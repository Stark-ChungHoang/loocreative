import * as Variable from "../../Variables";
import styled from "styled-components";
export const Container = styled.div`
  height: 1099px;
  background-color: ${Variable.BgGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 335px;
  font-family: ${Variable.FontNoto};
  @media screen and (${Variable.bigDestop}) {
    padding: 0 100px;
  }
  @media screen and (${Variable.tablet}) {
    height: 100%;
    padding: 0 40px;
  }
  @media screen and (${Variable.mobile}) {
    height: 100%;
    padding: 0 25px;
  }
 
`;
export const TopTitle = styled.div`
  margin-top: 120px;
  text-align: center;
  @media screen and (${Variable.tablet}) {
    margin-top: 60px;
  }
  @media screen and (${Variable.mobile}) {
    margin-top: 60px;
  }
`;
export const Title = styled.div`
  font-size: 40px;
  line-height: 55px;
  @media screen and (${Variable.mobile}) {
    font-size: 30px;
    text-align: center;
    padding: 0 25px;
  }
`;
export const DetailTitle = styled.div`
  margin-top: 40px;
  text-align: center;
  font-size: 18px;
  line-height: 28px;
  font-weight: 300;
  width: 348px;
  height: 45px;
  @media screen and (${Variable.mobile}) {
    padding: 0 20px;
    margin-left: 0px;
    margin-top: 20px;
    width: 100%;
  }
`;
export const ImgMobile = styled.div`
  display: none;

  @media screen and (${Variable.mobile}) {
    display: block;
    margin-top: 70px;
    padding: 10px 25px;
    .hidden {
      display: none;
    }
    img {
      overflow: hidden;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
export const ImgItems = styled.div``
export const Main = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 23% 54% 23%;

  @media screen and (${Variable.mobile}) {
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
`;
export const LeftContent = styled.div`
  @media screen and (${Variable.mobile}) {
  }
`;
export const CenterContent = styled.div`
  padding: 0 70px;
  cursor: pointer;
  height: 527px;
  display: flex;
  align-items: center;
  justify-content: center;
  .hidden {
    img {
      display: none;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    cursor: pointer;
  }
  @media screen and (${Variable.mobile}) {
    display: none;
  }
  overflow-x: visible !important;
`;

export const Items = styled.div`
  color: ${Variable.ClAbout};
  padding-top: 29px;

  &.active {
    color: ${Variable.TextDefault};
    img {
      opacity: 1;
    }
  }

  img {
    cursor: pointer;
    opacity: 0.6;
  }
`;
export const TitleItems = styled.div`
  font-size: 23.5px;
  line-height: 30.5px;
  overflow-x: visible !important;
  cursor: pointer;
`;

export const DetailItems = styled.div`
  margin-top: 10px;
  font-size: 17.5px;
  line-height: 28.5px;
  font-weight: 300;
`;

export const RightContent = styled.div`
  text-align: right;
  @media screen and (${Variable.mobile}) {
    text-align: left;
  }
`;
export const Button = styled.div`
  margin-top: 80px;
  margin-bottom: 30px;
  color: ${Variable.BgDefault};
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${Variable.TextDefault};
  height: 50px;
  padding: 16px 0;
  width: 216px;
  border-radius: 25px;
  margin-top: 30px;
  cursor: pointer;
  transition: 400ms;
  overflow-x: visible !important;
  &:hover {
    background-color: #807474;
  }
`;
