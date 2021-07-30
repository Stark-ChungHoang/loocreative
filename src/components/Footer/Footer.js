import styled from "styled-components";
import * as Variable from "../../Variables";
export const Container = styled.footer`
  height: 295px;
  background-color: ${Variable.BgDefault};
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: ${Variable.FontNoto};
  @media screen and (${Variable.mobile}) {
    flex-direction: column;
    height: 100%;
    padding: 0 20px;
  }
`;
export const Left = styled.div`
  margin-bottom: 20px;
`;
export const Right = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  img {
    padding-left: 18px;
    cursor: pointer;
  }
`;
export const Title = styled.div`
  padding: 20px 0;
  width: 276px;
  display: flex;
  justify-content: space-around;
  @media screen and (${Variable.mobile}) {
    width: 100%;
  }
`;
export const Content = styled.div`
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  cursor: pointer;
`;
export const Detail = styled.div`
  width: 519px;
  height: 130px;
  margin-top: 30px;
  font-weight: 300;
  letter-spacing: normal;
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
