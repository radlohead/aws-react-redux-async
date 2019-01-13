import * as React from 'react';
import { PRODUCT_TAB, RANKING_TAB } from '../actions';
import * as Types from '../types/Types';
import ProductTab from './ProductTab';
import RankingTab from './RankingTab';
import TabMenu from './TabMenu';

const ComponentsList = ({currentTab, onCurrentTab, productTabItemsJSON, rankingTabItemsJSON}: Types.IComponentsList): JSX.Element|null => {
    if (!productTabItemsJSON || !rankingTabItemsJSON) { 
        return null; 
    }

    return (
        <>
            <TabMenu 
                currentTab={currentTab}
                onCurrentTab={onCurrentTab} 
            />
            {currentTab === PRODUCT_TAB &&  <ProductTab json={productTabItemsJSON} />}
            {currentTab === RANKING_TAB && <RankingTab json={rankingTabItemsJSON} />}
        </>
    )
}

export default ComponentsList;