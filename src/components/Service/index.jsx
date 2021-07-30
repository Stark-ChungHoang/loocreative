import React from 'react'
import {dataService} from "./data"
import { Container, Detail, DetailPharagraph, Items, ItemsLeft, ItemsRight, Pharagraph, Title } from './Service';
function Service() {
    console.log(dataService);
    return (
        <Container>
                {dataService.map(({id,image,imgStart,title,widthTitle,pharagraph1,
                    detailPharagraph1,pharagraph2,detailPharagraph2,pharagraph3,detailPharagraph3,
                    pharagraph4,detailPharagraph4})=> {
                        return (
                            <Items key={id} imgStart={imgStart}>
                                    {/* LEFT  */}
                                <ItemsLeft>
                                        <Title widthTitle={widthTitle}>
                                            {title}
                                        </Title>
                                        <Detail>
                                            <Pharagraph>{pharagraph1}</Pharagraph>
                                            <DetailPharagraph>{detailPharagraph1}</DetailPharagraph>
                                            <Pharagraph>{pharagraph2}</Pharagraph>
                                            <DetailPharagraph>{detailPharagraph2}</DetailPharagraph>
                                            <Pharagraph>{pharagraph3}</Pharagraph>
                                            <DetailPharagraph>{detailPharagraph3}</DetailPharagraph>
                                            <Pharagraph>{pharagraph4}</Pharagraph>
                                            <DetailPharagraph>{detailPharagraph4}</DetailPharagraph>
                                        </Detail>
                                </ItemsLeft>
                                    {/* RIGHT  */}
                                <ItemsRight imgStart={imgStart}>
                                    <img src={image} alt="" />
                                </ItemsRight>
                            </Items>
                        )
                    })}
        </Container>
    )
}

export default Service

