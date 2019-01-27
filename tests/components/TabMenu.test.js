import tabMenu from '../../src/components/TabMenu';
import { PRODUCT_TAB } from '../../src/actions/ActionTypes';

it('TabMenu', () => {
    const TabMenu = {
        currentTab: PRODUCT_TAB,
        onCurrentTab: (PRODUCT_TAB) => PRODUCT_TAB
    };
    expect(tabMenu(TabMenu)).toBeTruthy();
});