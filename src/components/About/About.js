import * as Variable from "../../Variables"
import styled from "styled-components"
export const Container = styled.div`
        height: 1099px;
        background-color:${Variable.BgGray};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: ${Variable.FontNoto};
        @media screen and (max-width:768px) {
                height:100%;
                
   }
`
export const TopTitle = styled.div`
    margin-top: 20px;
    padding:0 25px;
`
export const Title = styled.div`
    font-size: 40px;
    line-height: 55px;
    @media screen and (max-width:768px) {
   font-size: 30px;
   text-align: center;
   padding:0 10px;
   }
`
export const DetailTitle = styled.div`
    margin-top: 40px;
    margin-left: 70px;
    text-align: center;
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
    width: 378px;
    @media screen and (max-width:768px) {
        padding:0 20px;
        margin-left: 0px;
        margin-top: 20px;
        width: 100%;
   
   }
`

export const Img = styled.div`
    display: none;
    @media screen and (max-width:768px) {
        display: block;
        padding:10px 25px;
      img {
        width: 100%;
        object-fit: contain;
        height: 100%;
      }
        }
`
export const Main = styled.div`

        margin-top: 80px;
    padding:0 180px;
        display: grid;
        grid-template-columns: 23% 54% 23%;
        color: ${Variable.ClAbout};
    @media screen and (max-width:768px) {
        display: flex;
        flex-direction: column;
        padding:0 40px;
        align-items: center;
        justify-content: center;
    margin-top: 20px;
   }
`
export const Left = styled.div`
@media screen and (max-width:768px) {
}
`
export const Center = styled.div`
    padding: 0 60px;
    cursor: pointer;
    height: 527px;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                cursor: pointer;

            }
        @media screen and (max-width:768px) {
        display: none;
        }
        overflow-x: visible !important;
`
export const Items = styled.div`
      padding-top: 29px;

`
export const TitleItems = styled.div`
        font-size: 23.5px;
        line-height: 30.5px;
        overflow-x: visible !important;
 
`

export const DetailItems = styled.div`
        margin-top: 10px;
    font-size: 17.5px;
     line-height: 28.5px;
     font-weight: 300;

`

export const Right = styled.div`
    text-align: right;
    @media screen and (max-width:768px) {
        text-align:left;

}
`
export const Button = styled.div`
    margin-top: 80px;
    margin-bottom: 20px;
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
`