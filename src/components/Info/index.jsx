import React from 'react'
import {DataInfoSection} from "./data"
import { Container, Detail, DetailInfo, ImgInfo, Number, Title, TitleInfo } from './Info';
function Info() {
    console.log(DataInfoSection);
    return (
        <>
            {DataInfoSection.map(({number,title,detail,widthTitle,widthDetail,bg,image,id,imgStart},index)=> {
                    return (
                        <Container key={index} imgStart={imgStart} bg={bg}>
                            {/* Left  */}
                                <ImgInfo>
                                    <img src={image} alt={number} />
                                </ImgInfo>

                            {/* Right  */}
                            <DetailInfo bg={bg}>
                                <Number> {number}</Number>
                                <TitleInfo bg={bg}>
                                <Title widthTitle={widthTitle}>{title}</Title>
                                </TitleInfo>
                                <Detail widthDetail={widthDetail}>{detail}</Detail>
                            </DetailInfo>
                        </Container>
                    )
            })}
        </>
    )
}

export default Info

