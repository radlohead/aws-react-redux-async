import * as React from 'react';
import * as moment from 'moment';
import '../css/tabMenu.scss';

const TabMenu = ({ currentTab, onCurrentTab }: any) => {
    return (
        <>
            <div className="tab__header">
                <div className="tab__header--left">
                    <strong className="tab__header--left__title">오늘 뭐 입지?</strong>
                    <span className="tab__header--left__date">
                        {moment().format('YY. MM. DD')}
                    </span>
                </div>
                <ul className='tab__header__menu'>
                    <li 
                        className={currentTab === 'PRODUCT_TAB' ? 'active' : ''}
                        onClick={() => onCurrentTab('PRODUCT_TAB')}>상품</li>
                    <li 
                        className={currentTab === 'RANKING_TAB' ? 'active' : ''}
                        onClick={() => onCurrentTab('RANKING_TAB')}>랭킹</li>
                </ul>
            </div>
        </>
    )
}

export default TabMenu;