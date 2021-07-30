import * as Variable from "../../Variables";
import styled from "styled-components";
export const Container = styled.div`
  height: 685px;
  background-color: ${Variable.BgDefault};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: normal;
  align-items: center;
  font-family: ${Variable.FontNoto};
  @media screen and (max-width: 1000px) {
    height: 900px;
  }
  @media screen and (max-width: 480px) {
    height: 100%;
    padding-top: 30px;
  }
`;
export const Title = styled.div`
  font-size: 40px;
  line-height: 48px;
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
  @media screen and (max-width: 320px) {
    font-size: 20px;
  } ;
`;
export const Detail = styled.div`
  margin-top: 30px;
  text-align: center;
  height: 73px;
  font-size: 18px;
  line-height: 28px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
    padding: 0 30px;
    font-size: 15px;
  }
  @media screen and (max-width: 320px) {
    padding: 0 15px;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
  }
  overflow-x: visible !important;
`;
export const ListItems = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
  }
  @media screen and (max-width: 320px) {
    margin-top: 25px;
  } 
`;
export const Items = styled.div`
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 90px;
    height: 90px;
    object-fit: contain;
  }

  overflow-x: visible !important;
`;
export const ItemsTitle = styled.div`
  margin-top: 15px;
  font-size: 24px;
  line-height: 32px;
  overflow-x: visible !important;
  @media screen and (max-width: 320px) {
    font-size: 17px;
    line-height: 35px;
  } ;
`;
export const ItemsDetail = styled.div`
  margin-top: 10px;
  font-size: 18px;
  line-height: 24px;
  width: 190px;
  text-align: center;
  font-weight: 300;
  overflow-x: visible !important;
`;
