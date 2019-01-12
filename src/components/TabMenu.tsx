import * as React from 'react';

import './TabMenu.scss';

const TabMenu = ({ currentTab, onCurrentTab }: any) => {
    console.log('TabMenu', currentTab, onCurrentTab);
    return (
        <>
            <ul className='TabMenu'>
                <li 
                    className={currentTab === 'PRODUCT_TAB' ? 'active' : ''}
                    onClick={() => onCurrentTab('PRODUCT_TAB')}>상품</li>
                <li 
                    className={currentTab === 'RANKING_TAB' ? 'active' : ''}
                    onClick={() => onCurrentTab('RANKING_TAB')}>랭킹</li>
            </ul>
        </>
    )
}

export default TabMenu;