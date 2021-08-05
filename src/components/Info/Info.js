import * as Variable from "../../Variables";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 335px;
  flex-direction: ${({ imgStart }) => (imgStart ? "row" : "row-reverse")};
  font-family: ${Variable.FontNoto};
  background-color: ${({ bg }) => (bg ? "#f4f5f8" : "#ffffff")};
  height: 640px;
  width: 100%;
  color: ${Variable.TextDefault};
  @media screen and (${Variable.bigDestop}) {
    padding: 0 100px;
    justify-content: space-between;
  }
  @media screen and (${Variable.laptop}) {
    height: 100%;
  }
  @media screen and (${Variable.tablet}) {
    flex-direction: column;
    height: 650px;
    justify-content: flex-start;
    overflow-x: visible;
  }
  @media screen and (${Variable.mobile}) {
    padding: 0 25px;
  }
  @media screen and (max-width: 320px) {
    height: 100%;
    margin-bottom: 30px;
  }
`;
export const ImgInfo = styled.div`
  padding-top: 30px;
  width: 610px;
  height: 400px;
  object-fit: contain;
  overflow-x: visible;
  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 768px) {
    /* height: 100%; */
    width: 100%;
    height: 300px;
  }
  @media screen and (max-width: 320px) {
    height: 200px;
  }
`;

export const DetailInfo = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  padding: 0 70px;
  text-align: ${({ bg }) => (bg ? "right" : "left")};
  @media screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    text-align: left;
    margin-top: 20px;
  }
  @media screen and (max-width: 640px) {
    padding: 0 25px;
  }
  @media screen and (max-width: 280px) {
    padding: 0 16px;
    max-width: 280px;
    margin-top: 0;
  }

  overflow-x: visible;
`;
export const Number = styled.div`
  font-size: 16px;
  line-height: 8px;
  color: ${Variable.CLButton};
  cursor: pointer;
  overflow-x: visible !important;
`;
export const TitleInfo = styled.div`
  display: flex;
  justify-content: ${({ bg }) => (bg ? "flex-end" : "flex-start")};
  overflow-x: visible !important;
`;
export const Title = styled.div`
  margin-top: 29px;
  height: 85px;
  width: ${({ widthTitle }) => widthTitle};
  font-size: 40px;
  line-height: 48px;
  letter-spacing: normal;
  overflow-x: visible !important;
  @media screen and (${Variable.tablet}) {
    width: 100%;
    height: 100%;
  }
  @media screen and (${Variable.mobile}) {
    font-size: 23px;
    line-height: 30px;
    text-align: center;
    margin-top: 10px;
  }
  @media screen and (max-width: 320px) {
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    margin-top: 10px;
    overflow-x: scroll;
  }
`;

export const Detail = styled.div`
  width: ${({ widthDetail }) => widthDetail};
  height: 101px;
  font-size: 18px;
  line-height: 28px;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
  overflow-x: visible !important;
  @media screen and (max-width: 368px) {
    padding: 0 20px;
    font-size: 11px;
    font-size: 13px;
    line-height: 20px;
    height: 100%;
  }
`;
