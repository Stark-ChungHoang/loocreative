import React, { useState } from 'react'
import { Button, Center, Container, DetailItems, DetailTitle, Img, Items, Left, Main, Right, Title, TitleItems, TopTitle } from './About'
import Icon1 from "../../img/img-about-1.png"
import Icon2 from "../../img/img-about-2.png"
import Icon3 from "../../img/img-about-3.png"
import Icon4 from "../../img/img-about-4.png"
import Icon5 from "../../img/img-about-5.png"
import Icon6 from "../../img/img-about-6.png"
import Icon7 from "../../img/img-main-about.png"
import Icon8 from "../../img/arrow-icon-1.svg"
import Icon9 from "../../img/img-main-2.png"
import Icon10 from "../../img/img-main-3.png"
import Icon11 from "../../img/img-main-4.png"
import Icon12 from "../../img/img-service-1.png"
import Icon13 from "../../img/img-service-2.png"
function About() {
   const [state,setState] = useState(1)
   const tabs = (index) => {
       setState(index)
   }
    return (
        <Container>
                <TopTitle>
                        <Title>
                        가드 시그니처를 선택하는 이유
                        </Title>
                </TopTitle>
                <DetailTitle>
                        많은 기업들이 가드 시그니처를 선택하는 이유,
                        아래 버튼을 눌러 상세한 정보를 알아보세요.
                        </DetailTitle>
                
                <Img  >
               
                        <div className={state ===1 ? "public" : "hidden"}><img src={Icon7}alt="{Icon7}" /></div>  
                          <div className={state ===2 ? "public" : "hidden"}><img src={Icon9} alt="icon9" /></div>  
                          <div className={state ===3 ? "public" : "hidden"}><img src={Icon10} alt="icon9" /></div>  
                          <div className={state ===4 ? "public" : "hidden"}><img src={Icon11} alt="icon9" /></div>  
                          <div className={state ===5 ? "public" : "hidden"}><img src={Icon12} alt="icon9" /></div>  
                          <div className={state ===6 ? "public" : "hidden"}><img src={Icon13} alt="icon9" /></div>  
                </Img>
               
              
                <Main>
                        <Left>
                            <Items className={state === 1 ? "active" : "tab"} onClick = {()=> tabs(1)}>
                                    <img  src={Icon1} alt="icon1" />
                                    <TitleItems >
                                         쉽고 편리하게
                                    </TitleItems>
                                    <DetailItems >
                                    번거로운 절차 없이 누구나
                                    빠르게 계약을 체결할 수 있습니다.
                                    </DetailItems>
                            </Items>
                            <Items className={state === 2 ? "active" : "tab"} onClick = {()=> tabs(2)}>
                                    <img src={Icon2} alt="icon2" />
                                    <TitleItems>
                                    안전한 보안
                                    </TitleItems>
                                    <DetailItems>
                                    데이터는 암호화되어 전송되고
                                        안전한 곳에 저장됩니다.
                                    </DetailItems>
                            </Items>
                            <Items className={state === 3 ? "active" : "tab"} onClick = {()=> tabs(3)}>
                                    <img src={Icon3} alt="{Icon3}" />
                                    <TitleItems>
                                    다양한 파일형식
                                    </TitleItems>
                                    <DetailItems>
                                    한글, 오피스부터 PDF, JPG와
                                    같은 이미지 파일도 변환없이 지원    
                                    </DetailItems>
                            </Items>
                        </Left>
                        <Center >
                          <div className={state ===1 ? "public" : "hidden"}><img src={Icon7}alt="{Icon7}" /></div>  
                          <div className={state ===2 ? "public" : "hidden"}><img src={Icon9} alt="icon9" /></div>  
                          <div className={state ===3 ? "public" : "hidden"}><img src={Icon10} alt="icon9" /></div>  
                          <div className={state ===4 ? "public" : "hidden"}><img src={Icon11} alt="icon9" /></div>  
                          <div className={state ===5 ? "public" : "hidden"}><img src={Icon12} alt="icon9" /></div>  
                          <div className={state ===6 ? "public" : "hidden"}><img src={Icon13} alt="icon9" /></div>  
                        </Center >
                        <Right>
                        <Items className={state === 4 ? "active" : "tab"} onClick = {()=> tabs(4)}>
                                    <img src={Icon4} alt="{Icon4}" />
                                    <TitleItems>
                                    간단한 본인인증
                                    </TitleItems>
                                    <DetailItems>
                                    공인인증서와 ActiveX없이도
                                    본인인증을 할 수 있습니다.
                                    </DetailItems>
                            </Items>
                        <Items className={state === 5 ? "active" : "tab"} onClick = {()=> tabs(5)}>
                                    <img src={Icon5} alt="{Icon5}" />
                                    <TitleItems>
                                    효율적인 작업
                                    </TitleItems>
                                    <DetailItems>
                                    자주 사용하는 문서들을 저장하고
                                    불러와 작업할 수 있습니다.
                                    </DetailItems>
                            </Items>
                        <Items className={state === 6 ? "active" : "tab"} onClick = {()=> tabs(6)}>
                                    <img src={Icon6} alt="{Icon6}" />
                                    <TitleItems>
                                    계약서 관리
                                    </TitleItems>
                                    <DetailItems>
                                    관리가 필요한 문서를 한 눈에 보고
                                    체계적으로 관리할 수 있습니다.
                                    </DetailItems>
                            </Items>
                        </Right>
                </Main>
                <Button>
                <span>가이드 다운로드</span>
                <img src={Icon8} alt="{Icon2}" />
            </Button>
        </Container>
    )
}

export default About
