import React from "react"
import DmmAffiliateIns from "./DmmAffiliateIns"

const KeywordTable = props => {
    const MAX_ROWS = 9;

    const shops = props.shops;
    const keys = shops.map((shop) =>  shop.keywords ? Object.keys(shop.keywords) : [])
        .flat()
        .filter((elem, index, self) => self.indexOf(elem) === index)
        .sort()
        .reverse()
    const by_table = [
        {
            h3: "カップ表記",
            keys: keys.filter(key => "CDEFGHIJK".includes(key)),
        },
        {
            h3: "バスト表記",
            keys: keys.filter(key => parseInt(key)),
        },
        {
            h3: "直接表記",
            keys: keys.filter(key => !"CDEFGHIJK".includes(key) && !parseInt(key))
        }
    ];
    const content = by_table.map(t => {
        if (t.keys.length === 0) return <></>;
        const header = <thead>
            <tr>
                <th>店名</th>
                {t.keys.map(key => <th key={key}>{key}</th>)}                    
            </tr>
        </thead>;

        const num_table = Math.ceil(shops.length / MAX_ROWS);
        const tables = [...Array(num_table).keys()].map(num => {
            // console.log(num*MAX_ROWS)
            const trs = shops.slice(num*MAX_ROWS, (num+1)*MAX_ROWS).map(shop => {
                let raw_url = shop.url.replace("http://", "").replace("https://", "")
                if (raw_url.endsWith('/')) raw_url = raw_url.slice(0, -1)

                const tds = "keywords" in shop
                    ? t.keys.map(key => key in shop.keywords ? <td key={key}><a href={`https://www.google.com/search?q=site%3A${raw_url}+${key}`}>{shop.keywords[key]}</a></td> : <td key={key}></td>)
                    : t.keys.map(key => <td key={key}></td>)
                return <tr key={shop.url}>
                    <td><a href={shop.url}>{shop.name}</a><br />@{shop.station}</td>{tds}
                </tr>
            });
            const tcls = t.keys.length > 5 && window.innerWidth < 500
            return <div key={`table-${num}`}><table className={tcls ? "scrollable": "original"}>
                {header}
                <tbody>{trs}</tbody>
            </table>
            <DmmAffiliateIns />
            </div>
        })


        return <div key={t.h3}>
            <h3>{t.h3}</h3>
            {tables}

        </div>;
    });
    // const content = "fuck"
    return <>{content}</>;
};

export default KeywordTable;