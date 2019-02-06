import * as React from 'react';
import * as moment from 'moment';
import classNames from 'classnames';
import { PRODUCT_TAB, RANKING_TAB } from '../actions/ActionTypes';
import * as Types from '../types/Types';
import '../css/tabMenu.scss';

const TabMenu = ({ currentTab, onCurrentTab }: Types.ITabMenu): JSX.Element => {
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
                        className={classNames({'active': currentTab === PRODUCT_TAB})}
                        onClick={() => onCurrentTab(PRODUCT_TAB)}>상품</li>
                    <li 
                        className={classNames({'active': currentTab === RANKING_TAB})}
                        onClick={() => onCurrentTab(RANKING_TAB)}>랭킹</li>
                </ul>
            </div>
        </>
    )
}

export default TabMenu;