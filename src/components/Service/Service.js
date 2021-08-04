import * as Variable from "../../Variables"
import styled from "styled-components"
export const Container = styled.div`
    height: 2491px;
    display: flex;
    font-family: ${Variable.FontNoto};
    flex-direction: column;
    align-items: center;
    margin-bottom:100px;
    overflow-x: visible;
    @media screen and (${Variable.tablet}) {
        height: 100%;

    }
`
export const Items = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        overflow-x: visible;
        flex-direction: ${({imgStart})=> (imgStart ? "row-reverse" : "row")};
        @media screen and (${Variable.tablet}) {
            flex-direction: column-reverse;
            
            
}
`

export const ItemsLeft = styled.div`
    margin-top: 120px;
    padding-left: 10px;
    overflow-x: visible;
    @media screen and (${Variable.laptop}) {
               padding:0 40px;
                
    }
    @media screen and (${Variable.tablet}) {
                margin-top: 30px;
                padding:0 20px;
                
    }
`
export const Title = styled.div`
    font-size: 40.5px;
    line-height: 48px;
    width: ${({widthTitle})=> widthTitle};
    overflow-x: visible;
    @media screen and (${Variable.tablet}) {
                width: 100%;
                padding:20px 20px;
                margin: auto;
                font-size: 35px;         
    }
    @media screen and (${Variable.mobile}) {
                width: 100%;
                padding:20px 20px;
                line-height: 28px;
                margin: auto;
                font-size: 25px;         
    }
`
export const Detail = styled.div`
    margin-top: 20px;
    max-width: 449px;
    overflow-x: visible;
    @media screen and (${Variable.tablet}) {
                padding:0 30px;
                max-width: 100%;
    }
`
export const Pharagraph = styled.div`
    padding-top: 40px;
    font-size: 23.5px;
    line-height: 30.5px;
    overflow-x: visible;
    @media screen and (${Variable.tablet}) {
                padding-top: 20px;         
    }
    @media screen and (${Variable.mobile}) {
        font-size: 19.5px;
    line-height: 20.5px;
    }
`
export const DetailPharagraph = styled.div`
    margin-top: 20px;
    font-weight: 300;
    font-size: 17.5px;
    line-height: 28.5px;
    overflow-x: visible;
    @media screen and (${Variable.mobile}) {
        font-size: 15.5px;
    line-height: 17.5px;
    }
`
export const ItemsRight = styled.div`
    padding-left: ${({imgStart})=> (imgStart ? "0px" : "90px")};
    padding-right: ${({imgStart})=> (imgStart ? "90px" : "0px")};
    padding-top: 100px;
    display: flex;
    width: 636px;
    height: 531px;
    align-items: center;
    justify-content: center;
    overflow-x:visible;
      
    img {
        object-fit: contain;
        width: 80%;
        height: 80%;
    }
    @media screen and (${Variable.tablet}) {
                padding:0px 70px;
            align-items: flex-start;
            padding-top: 40px;
            height: 100%;
            width: 100%;
    }

`