import React from 'react'
import { Button, Center, Container, DetailItems, DetailTitle, Img, Items, Left, Main, Right, Title, TitleItems, TopTitle } from './About'
import Icon1 from "../../img/img-about-1.png"
import Icon2 from "../../img/img-about-2.png"
import Icon3 from "../../img/img-about-3.png"
import Icon4 from "../../img/img-about-4.png"
import Icon5 from "../../img/img-about-5.png"
import Icon6 from "../../img/img-about-6.png"
import Icon7 from "../../img/img-main-about.png"
import Icon8 from "../../img/arrow-icon-1.svg"
function About() {
   
    return (
        <Container>
                <TopTitle>
                        <Title>
                        가드 시그니처를 선택하는 이유
                        </Title>
                        <DetailTitle>
                        많은 기업들이 가드 시그니처를 선택하는 이유,
                        아래 버튼을 눌러 상세한 정보를 알아보세요.
                        </DetailTitle>
                </TopTitle>
                <Img >
                <img src={Icon7} alt="icon1" />
                </Img>
                <Main>
                        <Left>
                            <Items>
                                    <img style={{cursor:"pointer"}} src={Icon1} alt="icon1" />
                                    <TitleItems style={{color:"#333333",cursor:"pointer"}}>
                                         쉽고 편리하게
                                    </TitleItems>
                                    <DetailItems style={{color:"#333333"}}>
                                    번거로운 절차 없이 누구나
                                    빠르게 계약을 체결할 수 있습니다.
                                    </DetailItems>
                            </Items>
                            <Items>
                                    <img src={Icon2} alt="icon2" />
                                    <TitleItems>
                                    안전한 보안
                                    </TitleItems>
                                    <DetailItems>
                                    데이터는 암호화되어 전송되고
                                        안전한 곳에 저장됩니다.
                                    </DetailItems>
                            </Items>
                            <Items>
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
                        <Center>
                            <img src={Icon7}alt="{Icon7}" />
                        </Center>
                        <Right>
                        <Items>
                                    <img src={Icon4} alt="{Icon4}" />
                                    <TitleItems>
                                    간단한 본인인증
                                    </TitleItems>
                                    <DetailItems>
                                    공인인증서와 ActiveX없이도
                                    본인인증을 할 수 있습니다.
                                    </DetailItems>
                            </Items>
                        <Items>
                                    <img src={Icon5} alt="{Icon5}" />
                                    <TitleItems>
                                    효율적인 작업
                                    </TitleItems>
                                    <DetailItems>
                                    자주 사용하는 문서들을 저장하고
                                    불러와 작업할 수 있습니다.
                                    </DetailItems>
                            </Items>
                        <Items>
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
