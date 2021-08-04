import React from 'react'
import { Container, Content, Detail, Left, Right, Title } from './Footer'
function Footer() {
    return (
        <Container>
            <Left>
                <Title>
                        <Content>
                        이용약관          
                        </Content>
                        <Content>
                    개인정보처리방침 
                        </Content>
                        <Content>
                    고객센터
                        </Content>
                </Title>
                <Detail>
                <p>(주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000
                    이메일 : test0101@guardsignature.co.kr｜ FAX : 070-0000-0000
                    서울특별시 강남구 도산대로 8길 17 3층 </p>
                  
                
                    <p style={{marginTop:"20px"}}>Copyright© GUARDSIGNATURE All rights reserved.</p>
                </Detail>
            
     
             
            </Left>
            <Right>
                    <img style={{paddingBottom:"2px"}} src="../../../img-icon-5.png" alt="#" />
                    <img style={{marginLeft:"18px"}} src="../../../img-icon-4.png" alt="2" />
                    <img style={{paddingTop:"2px",marginLeft:"18px"}} src="../../../img-icon-3.png" alt="3" />
            </Right>
        </Container>
    )
}

export default Footer

