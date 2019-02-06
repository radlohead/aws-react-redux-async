import * as React from 'react';
import { LOADING, PRODUCT_TAB, RANKING_TAB } from '../actions/ActionTypes';
import * as Types from '../types/Types';
import ProductTab from './ProductTab';
import RankingTab from './RankingTab';
import TabMenu from './TabMenu';

const ComponentsList = (state: Types.IComponentsList): JSX.Element|null => {
    const { currentTab, onCurrentTab, type, productTabItemsJSON = [], rankingTabItemsJSON = [] }: Types.IComponentsList = state;
    
    if (type === LOADING) {
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