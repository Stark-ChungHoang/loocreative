import styled from "styled-components";
import * as Variable from "../../Variables";
export const Container = styled.footer`
  height: 295px;
  background-color: ${Variable.BgDefault};
  display: flex;
  padding: 0 335px;
  justify-content: space-between;
  font-family: ${Variable.FontNoto};
  @media screen and (${Variable.destop}) {
    padding: 0 100px;
  }
  @media screen and (${Variable.mobile}) {
    flex-direction: column;
    height: 100%;
    padding: 0 25px;
  }
`;
export const Left = styled.div`
  margin-bottom: 20px;
`;
export const Right = styled.div`
  margin-top: 60px;
  display: flex;
  @media screen and (max-width: 768px) {
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  img {
    width: 19px;
    height: 18px;
    object-fit: contain;
    cursor: pointer;
  }
`;
export const Title = styled.div`
  margin-top: 60px;
  width: 276px;
  display: flex;
  justify-content: space-between;

  @media screen and (${Variable.mobile}) {
    margin-top: 30px;
    width: 100%;
  }
`;
export const Content = styled.div`
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  cursor: pointer;
`;
export const Detail = styled.div`
  font-size: 14px;
  line-height: 24px;
  width: 419px;
  height: 112px;
  margin-top: 25px;
  font-weight: 300;
  display: flex;
  flex-direction: column;

  color: ${Variable.GrayCl};
  @media screen and (${Variable.mobile}) {
    width: 100%;
    height: 100%;
    padding: 0 25px;
    text-align: center;
    font-size: 13px;
  }
  overflow-x: visible !important;
`;
