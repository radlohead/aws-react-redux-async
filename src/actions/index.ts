import { Dispatch } from 'redux';
import * as Types from '../types/Types';

export const DAILYLOOK: string = 'DAILYLOOK';
export const PRODUCT_TAB: string = 'PRODUCT_TAB';
export const RANKING_TAB: string = 'RANKING_TAB';

export const currentTab = (tabName: string): Types.ICurrentTab => {
    return {
        type: DAILYLOOK,
        currentTab: tabName
    }
}

export const receiveProductTabItems = (json: Types.IProductTabItemsJSON): Types.IFetchProductTabItems => {
    return {
        type: DAILYLOOK,
        productTabItemsJSON: json
    }
}

export const fetchProductTabItems = () => (dispatch: Dispatch): Promise<Types.IFetchProductTabItems> => {
    return fetch('http://localhost:3003/data')
        .then(response => response.json())
        .then(json => dispatch(receiveProductTabItems(json)));
}

export const receiveRankingTabItems = (json: Types.IRankingTabItemJSON): Types.IFetchRankingTabItems => {
    return {
        type: DAILYLOOK,
        rankingTabItemsJSON: json
    }
}

export const fetchRankingTabItems = () => (dispatch: Dispatch): Promise<Types.IFetchRankingTabItems> => {
    return fetch('http://localhost:3004/data')
        .then(response => response.json())
        .then(json => dispatch(receiveRankingTabItems(json)));
}

export const fetchItemsCall = () => (dispatch: Dispatch<any> ): void|any => {
    Promise.all([
        dispatch(fetchProductTabItems()),
        dispatch(fetchRankingTabItems())
    ]);
}


