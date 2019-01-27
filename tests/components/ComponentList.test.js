import componentList from '../../src/components/ComponentsList';
import { PRODUCT_TAB } from '../../src/actions/ActionTypes';

it('ComponentsList', () => {
    const state = {
        currentTab: PRODUCT_TAB,
        onCurrentTab: () => {},
        productTabItemsJSON: [],
        rankingTabItemsJSON: []
    };
    expect(componentList(state)).toEqual(null);
});