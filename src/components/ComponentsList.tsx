import * as React from 'react';
import ProductTab from './ProductTab';
import RankingTab from './RankingTab';
import TabMenu from './TabMenu';

const ComponentsList = ({currentTab, onCurrentTab, json}: any) => {
    console.log('ComponentsList', currentTab, json);
    return (
        <>
            <TabMenu 
                currentTab={currentTab}
                onCurrentTab={onCurrentTab}
            />
            {currentTab === 'PRODUCT_TAB' &&  <ProductTab json={json} />}
            {currentTab === 'RANKING_TAB' && <RankingTab />}
        </>
    )
}

export default ComponentsList;