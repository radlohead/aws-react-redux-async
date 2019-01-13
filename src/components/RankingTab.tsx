import * as React from 'react';
import * as Types from '../types/Types';
import '../css/rankingTab.scss';

const RankingTab = (rankingTabItemsJSON: Types.IRankingTab|any): JSX.Element => {
    return (
        <div className='ranking__tab'>
            <ul>
                {rankingTabItemsJSON.json.map((v: Types.IRankingTabItemsData, i: number): JSX.Element => {
                    return (
                        <li key={i} className='ranking__tab__item'>
                            <a className="ranking__tab__item__href" href={v.url}>
                                <em className={'ranking__tab__index ' + (i <= 2 ? `ranking__${i+1}` : '')}>{i+1}</em>
                                <img className='ranking__tab__img' src={v.image.url} alt={v.name} />
                                <div className='ranking__tab--right'>
                                    <h4 className='ranking__tab--right__name'>{v.name}</h4>
                                    <span className='ranking__tab--right__description'>{v.description}</span>
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default RankingTab;