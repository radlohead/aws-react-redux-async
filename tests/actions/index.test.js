import * as types from'../../src/actions/ActionTypes';
import * as actions from '../../src/actions';

it('currentTab', () => {
    const result = {
        type: types.DAILYLOOK,
        currentTab: types.PRODUCT_TAB
    }
    expect(actions.currentTab(types.PRODUCT_TAB)).toEqual(result);
});

it('fetchProductTabItems', () => {
    return expect(actions.fetchProductTabItems()).toBeTruthy();
});

it('fetchRankingTabItems', () => {
    return expect(actions.fetchRankingTabItems()).toBeTruthy();
});

it('fetchItemsCall', () => {
    return expect(actions.fetchItemsCall()).toBeTruthy();
});