import React from "react";
import { useWindowWidth } from "./myWindow";

// <ins class="dmm-widget-placement" data-id="8a0438efcde302f955707be050e5f855" style="background:transparent"></ins>
// <script src="https://widget-view.dmm.co.jp/js/placement.js" class="dmm-widget-scripts" data-id="8a0438efcde302f955707be050e5f855"></script>


// 300x250
// 5c9eeba59189115c60b2a76ff917fb2c
// 720x90
// 4dc8aafb11859d7020c133dc55798078

// DMM アイドル
// 300x250
// bbae0b34dd26391b131bb1f8a7b2e201
// 720x90
// 9cea791b72ef6db7456f323b97811bfc

// 素人
// 300x250
// ee070ae4b93b5749992653906b40f310
// 720x90
// 410cba681e3433955ab8e52a9d8c9d5f

const DmmAffiliateIns = () => {
    const width = useWindowWidth()
    const dataId = width > 1000 ? "4dc8aafb11859d7020c133dc55798078" : "5c9eeba59189115c60b2a76ff917fb2c"
    return <ins className="dmm-widget-placement" data-id={`${dataId}`} style={{"background": "transparent"}}></ins>;
}

export default DmmAffiliateIns;