import { DetailItems, Items, LeftContent, TitleItems } from "./About"
import Icon1 from "../../img/img-about-1.png"
import Icon2 from "../../img/img-about-2.png"
import Icon3 from "../../img/img-about-3.png"
function LeftContentItems({state,tabs}) {
    return (
        <LeftContent>
                                        <Items className={state === 1 ? "active" : "tab"} onClick={() => tabs(1)}>
                                                <img src={Icon1} alt="icon1" />
                                                <TitleItems >
                                                        쉽고 편리하게
                                                </TitleItems>
                                                <DetailItems >
                                                        번거로운 절차 없이 누구나
                                                        빠르게 계약을 체결할 수 있습니다.
                                                </DetailItems>
                                        </Items>
                                        <Items className={state === 2 ? "active" : "tab"} onClick={() => tabs(2)}>
                                                <img src={Icon2} alt="icon2" />
                                                <TitleItems>
                                                        안전한 보안
                                                 </TitleItems>
                                                <DetailItems>
                                                        데이터는 암호화되어 전송되고
                                                        안전한 곳에 저장됩니다.
                                                 </DetailItems>
                                        </Items>
                                        <Items className={state === 3 ? "active" : "tab"} onClick={() => tabs(3)}>
                                                <img src={Icon3} alt="{Icon3}" />
                                                <TitleItems>
                                                        다양한 파일형식
                                                </TitleItems>
                                                <DetailItems>
                                                        한글, 오피스부터 PDF, JPG와
                                                        같은 이미지 파일도 변환없이 지원
                                               </DetailItems>
                                        </Items>
                                </LeftContent>
    )
}

export default LeftContentItems
