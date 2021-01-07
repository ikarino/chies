import React, { useEffect } from "react"
import { useWindowWidth } from "./myWindow";

// <ins class="dmm-widget-placement" data-id="8a0438efcde302f955707be050e5f855" style="background:transparent"></ins>
// <script src="https://widget-view.dmm.co.jp/js/placement.js" class="dmm-widget-scripts" data-id="8a0438efcde302f955707be050e5f855"></script>


// 300x250
// 5c9eeba59189115c60b2a76ff917fb2c
// 720x90
// 4dc8aafb11859d7020c133dc55798078

const DmmAffiliateScript = () => {
    const width = useWindowWidth();
    useEffect(() => {
        const dataId = width > 1000 ? "4dc8aafb11859d7020c133dc55798078" : "5c9eeba59189115c60b2a76ff917fb2c"
        // const dataId = window.innerWidth > 1000 ? "4dc8aafb11859d7020c133dc55798078" : "5c9eeba59189115c60b2a76ff917fb2c"
        const script = document.createElement("script");
        script.src = "/placement.js";
        script.async = true;
        script.setAttribute("data-id", dataId);
        script.setAttribute("class", "dmm-widget-scripts");
        document.body.appendChild(script);
    })

    return  <></>
}

export default DmmAffiliateScript;