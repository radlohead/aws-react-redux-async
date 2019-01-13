import * as React from 'react';
import ProductTab from './ProductTab';
import RankingTab from './RankingTab';
import TabMenu from './TabMenu';

const ComponentsList = ({currentTab, onCurrentTab, productTabItemsJSON, rankingTabItemsJSON}: any) => {
    return (
        <>
            <TabMenu 
                currentTab={currentTab}
                onCurrentTab={onCurrentTab}
            />
            {currentTab === 'PRODUCT_TAB' &&  <ProductTab json={productTabItemsJSON} />}
            {currentTab === 'RANKING_TAB' && <RankingTab json={rankingTabItemsJSON} />}
        </>
    )
}

export default ComponentsList;