import React from 'react'
import { Items, ItemsDetail, ItemsTitle, ListItems } from './Contact'
import Icon1 from "../../img/upload-icon-1.svg"
import Icon2 from "../../img/upload-icon-2.svg"
import Icon3 from "../../img/upload-icon-3.svg"
import Icon4 from "../../img/upload-icon-4.svg"
function List() {
 
    return (
        <ListItems>
            <Items>
                <img src={Icon1} alt="#" />
                <ItemsTitle>
                    업로드하기
            </ItemsTitle>
                <ItemsDetail>
                    필요한 계약서 파일을
                    업로드합니다.
            </ItemsDetail>
            </Items>
            <Items>
                <img src={Icon2} alt="#" />
                <ItemsTitle>
                    서명 요청하기
            </ItemsTitle>
                <ItemsDetail>
                    업로드한 계약서 파일에
                    서명 요청을 하세요.
            </ItemsDetail>
            </Items>
            <Items>
                <img src={Icon3} alt="#" />
                <ItemsTitle>
                    서명 입력하기
            </ItemsTitle>
                <ItemsDetail>
                    상대방이 간단한 절차를 통해
                    서명할 수 있습니다.
            </ItemsDetail>
            </Items>
            <Items>
                <img src={Icon4} alt="#" />
                <ItemsTitle>
                    계약 완료
            </ItemsTitle>
                <ItemsDetail>
                    언제 어디서든
                    5분 만에 계약 완료!
            </ItemsDetail>
            </Items>
        </ListItems>
    )
}

export default List


