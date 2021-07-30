import React from 'react'
import { Button, Container, Intro, Title } from './Discover'
import Icon from "../../img/arrow-icon-1.svg"
function Discover() {
    return (
        <Container>
            <Intro>
            지금 바로 시작하세요!
            </Intro>
            <Title>
            설명이 필요 없는 간단한 계약 과정,<br />
                직접 경험해보세요!
            </Title>
            <Button>
                <span>더 살펴보기</span>
                <img src={Icon} alt="#" />
            </Button>
        </Container>
    )
}

export default Discover
