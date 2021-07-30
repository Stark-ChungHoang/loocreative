import React from 'react'
import { Container, Detail, Title } from './Contact'
import ListItems from './ListItems'
function Contact() {
    return (
        <Container>
            <Title>
                간단하게 끝내는 계약과정
            </Title>
            <Detail>
                <p>계약서 파일을 업로드하여 서명을 요청해 보세요.</p>
                <p>상대방은 회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수 있습니다.</p>
                <p>언제 어디서든 5분만에 계약을 체결해 보세요.</p>
            </Detail>
            <ListItems />
           
        </Container>
    )
}

export default Contact


