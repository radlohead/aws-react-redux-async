import * as React from 'react';
import { PRODUCT_TAB, RANKING_TAB } from '../actions/ActionTypes';
import * as Types from '../types/Types';
import ProductTab from './ProductTab';
import RankingTab from './RankingTab';
import TabMenu from './TabMenu';

const ComponentsList = (state: Types.IComponentsList|any): JSX.Element|null => {
    const { currentTab, onCurrentTab, productTabItemsJSON = [], rankingTabItemsJSON = [] }: Types.IComponentsList = state;
    
    if (productTabItemsJSON.length === 0 || 
        rankingTabItemsJSON.length === 0) {
        return null;
    }

    return (
        <>
            <TabMenu 
                currentTab={currentTab}
                onCurrentTab={onCurrentTab} 
            />
            {currentTab === PRODUCT_TAB && <ProductTab json={productTabItemsJSON} />}
            {currentTab === RANKING_TAB && <RankingTab json={rankingTabItemsJSON} />}
        </>
    )
}

export default ComponentsList;