import React from 'react'
import { Button, Container, Content, Detail, ImgButton, ImgHero, Title, TitleButton } from './HeroSection'
import Icon from "../../img/arrow-button.svg"
import Icon2 from "../../img/banner-img-2.jpg"
function HeroSection() {
    return (
        <Container id="about">
            <ImgHero>
                <img src={Icon2} alt="#" />
            </ImgHero>
            <Content>
                <Title>
                    <h4>모든 계약을 쉽고 <br />
                    간단하게, 빠르게 처리하세요.
                      </h4>
                </Title>
                <Detail>
                가드 시그니처를 이용하면 어떤 계약이든 <br />
                복잡한 과정없이 간편하고 손쉽게 처리할 수 있고, <br />
                문서 처리 및 관리까지 편리하게 이용할 수 있습니다. <br />
                </Detail>
                <Button>
                        <TitleButton>지금 확인하기</TitleButton>
                        <ImgButton><img  src={Icon} alt="3ffdfd" /></ImgButton>
                </Button>
            </Content>
        </Container>
    )
}

export default HeroSection

