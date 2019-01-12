import * as React from 'react';
import './RankingTab.scss';

const RankingTab = (rankingTabItemsJSON: any) => {
    console.log('rankingTab', rankingTabItemsJSON);
    return (
        <div className='RankingTab'>
            <ul>
                {rankingTabItemsJSON.json.map((v: any, i: number): JSX.Element => {
                    return (
                        <li key={i}>
                            <img src={v.image.url} alt={v.name} />
                            <div className="ranking__tab--right">
                                <h4 className="ranking__tab__name">{v.name}</h4>
                                <span className="ranking__tab__description">{v.description}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default RankingTab;