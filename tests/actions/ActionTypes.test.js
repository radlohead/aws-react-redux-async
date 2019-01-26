import * as types from '../../src/actions/ActionTypes';

it('DAILYLOOK', () => {
    expect(types.DAILYLOOK).toEqual('DAILYLOOK');
});

it('PRODUCT_IS_FETCHED', () => {
    expect(types.PRODUCT_IS_FETCHED).toEqual('PRODUCT_IS_FETCHED');
});

it('PRODUCT_IS_ERROR', () => {
    expect(types.PRODUCT_IS_ERROR).toEqual('PRODUCT_IS_ERROR');
});

it('RANKING_IS_FETCHED', () => {
    expect(types.RANKING_IS_FETCHED).toEqual('RANKING_IS_FETCHED');
});

it('RANKING_IS_ERROR', () => {
    expect(types.RANKING_IS_ERROR).toEqual('RANKING_IS_ERROR');
});

it('PRODUCT_TAB', () => {
    expect(types.PRODUCT_TAB).toEqual('PRODUCT_TAB');
});

it('RANKING_TAB', () => {
    expect(types.RANKING_TAB).toEqual('RANKING_TAB');
});