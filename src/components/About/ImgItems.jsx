import { ImgItems } from "./About"
import Icon7 from "../../img/img-main-about.png"
import Icon9 from "../../img/img-main-2.png"
import Icon10 from "../../img/img-main-3.png"
import Icon11 from "../../img/img-main-4.png"
import Icon12 from "../../img/img-service-1.png"
import Icon13 from "../../img/img-service-2.png"
function ImgContent({state}) {
    return (
        <>
                                <ImgItems className={state === 1 ? "public" : "hidden"}><img src={Icon7} alt="{Icon7}" /></ImgItems>
                                <ImgItems className={state === 2 ? "public" : "hidden"}><img src={Icon9} alt="icon9" /></ImgItems>
                                <ImgItems className={state === 3 ? "public" : "hidden"}><img src={Icon10} alt="icon9" /></ImgItems>
                                <ImgItems className={state === 4 ? "public" : "hidden"}><img src={Icon11} alt="icon9" /></ImgItems>
                                <ImgItems className={state === 5 ? "public" : "hidden"}><img src={Icon12} alt="icon9" /></ImgItems>
                                <ImgItems className={state === 6 ? "public" : "hidden"}><img src={Icon13} alt="icon9" /></ImgItems>
        </>
    )
}

export default ImgContent
