import * as React from 'react';

import './TabMenu.scss';

const TabMenu = () => {
    return (
        <>
            <ul className="TabMenu">
                <li className="active">상품</li>
                <li>랭킹</li>
            </ul>
        </>
    )
}

export default TabMenu;