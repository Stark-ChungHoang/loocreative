import { DetailItems, Items, RightContent, TitleItems } from "./About"
import Icon4 from "../../img/img-about-4.png"
import Icon5 from "../../img/img-about-5.png"
import Icon6 from "../../img/img-about-6.png"
function RightContentItems({state,tabs}) {
    return (
        <RightContent>
        <Items className={state === 4 ? "active" : "tab"} onClick={() => tabs(4)}>
                <img src={Icon4} alt="{Icon4}" />
                <TitleItems>
                        간단한 본인인증
                </TitleItems>
                <DetailItems>
                        공인인증서와 ActiveX없이도
                        본인인증을 할 수 있습니다.
                 </DetailItems>
        </Items>
                  <Items className={state === 5 ? "active" : "tab"} onClick={() => tabs(5)}>
                <img src={Icon5} alt="{Icon5}" />
                <TitleItems>
                        효율적인 작업
                </TitleItems>
                <DetailItems>
                        자주 사용하는 문서들을 저장하고
                        불러와 작업할 수 있습니다.
                  </DetailItems>
        </Items>
        <Items className={state === 6 ? "active" : "tab"} onClick={() => tabs(6)}>
                <img src={Icon6} alt="{Icon6}" />
                <TitleItems>
                        계약서 관리
                </TitleItems>
                <DetailItems>
                        관리가 필요한 문서를 한 눈에 보고
                        체계적으로 관리할 수 있습니다.
                 </DetailItems>
        </Items>
</RightContent>
    )
}

export default RightContentItems
