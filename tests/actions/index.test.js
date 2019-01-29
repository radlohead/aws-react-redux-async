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

it('fetchRankingTabItems', async () => {
    nock('http://localhost:3004')
    .get('/data').once().reply(200);
    await store.dispatch(actions.fetchRankingTabItems());

    expect(store.getActions()[1]).toHaveProperty('type', 'RANKING_IS_FETCHED');
    expect(store.getActions()[1]).toHaveProperty('rankingTabItemsJSON');
});

it('fetchItemsCall', async () => {
    nock('http://localhost:3003')
    .get('/data').once().reply(200);
    nock('http://localhost:3004')
    .get('/data').once().reply(200);
    await store.dispatch(actions.fetchItemsCall());
    
    expect(store.getActions()[0]).toHaveProperty('type', 'PRODUCT_IS_FETCHED');
    expect(store.getActions()[1]).toHaveProperty('type', 'RANKING_IS_FETCHED');
});