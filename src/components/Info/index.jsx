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
                                {/* Left  section*/}
                                    <ImgInfo>
                                        <img src={image} alt={number} />
                                    </ImgInfo>
                                {/* END LEFT SECTION  */}

                                {/* Right section */}
                                <DetailInfo bg={bg}>
                                    <Number> {number}</Number>
                                    <TitleInfo bg={bg}>
                                    <Title widthTitle={widthTitle}>{title}</Title>
                                    </TitleInfo>
                                    <Detail widthDetail={widthDetail}>{detail}</Detail>
                                </DetailInfo>
                            {/* END RIGHT SECTION  */}
                        </Container>
                    )
            })}
        </>
    )
}

export default Info

