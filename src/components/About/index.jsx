import React, { useState } from 'react'
import { Button, CenterContent, Container,DetailTitle,
              ImgMobile,Main,Title,  TopTitle } from './About'
 import Icon8 from "../../img/arrow-icon-1.svg"             
import LeftContentItems from './LeftContent'
import RightContentItems from './RightContent'
import ImgContent from './ImgItems'
function About() {
        const [state, setState] = useState(1)
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

                        {/* IMG mobile version */}
                        <ImgMobile  >
                               <ImgContent state={state} />
                        </ImgMobile>

                        <Main>
                        {/* START LEFT CONTENT  */}
                                <LeftContentItems state = {state} tabs={tabs} />
                        {/* {END LEFT CONTENT}  */}

                        {/* START CENTER CONTENT  */}
                                <CenterContent >
                                        <ImgContent state={state} />
                                </CenterContent >
                        {/* END CENTER CONTENT  */}

                         {/* { START Right CONTENT} */}
                                <RightContentItems state={state} tabs={tabs} />
                         {/* {END RIGHT CONTENT} */}
                        </Main>
                        {/* BUTTON SECTION  */}
                        <Button>
                                <span>가이드 다운로드</span>
                                <img src={Icon8} alt="{Icon2}" />
                        </Button>
                </Container>
        )
}

export default About
