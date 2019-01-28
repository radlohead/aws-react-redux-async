import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as types from'../../src/actions/ActionTypes';
import * as actions from '../../src/actions';

const store = configureStore([thunk])();

it('currentTab', () => {
    const result = {
        type: types.DAILYLOOK,
        currentTab: types.PRODUCT_TAB
    }
    expect(actions.currentTab(types.PRODUCT_TAB)).toEqual(result);
});

it('fetchProductTabItems', async () => {
    nock('http://localhost:3003')
    .get('/data').once().reply(200);
    await store.dispatch(actions.fetchProductTabItems());

    expect(store.getActions()[0]).toHaveProperty('type', 'PRODUCT_IS_FETCHED');
    expect(store.getActions()[0]).toHaveProperty('productTabItemsJSON');
});

it('fetchRankingTabItems', () => {
    return expect(actions.fetchRankingTabItems()).toBeTruthy();
});

it('fetchItemsCall', () => {
    return expect(actions.fetchItemsCall()).toBeTruthy();
});