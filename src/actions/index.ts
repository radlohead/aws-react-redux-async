import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';
import * as Types from '../types/Types';

export const DAILYLOOK: string = 'DAILYLOOK';
export const PRODUCT_IS_FETCHED: string = 'PRODUCT_IS_FETCHED';
export const PRODUCT_IS_ERROR: string = 'PRODUCT_IS_ERROR';
export const RANKING_IS_FETCHED: string = 'RANKING_IS_FETCHED';
export const RANKING_IS_ERROR: string = 'RANKING_IS_ERROR';
export const PRODUCT_TAB: string = 'PRODUCT_TAB';
export const RANKING_TAB: string = 'RANKING_TAB';

export const currentTab = (tabName: string): Types.ICurrentTab => {
    return {
        type: DAILYLOOK,
        currentTab: tabName
    }
}

export const fetchProductTabItems = () => {
    return (dispatch: Dispatch): void => {
        dispatch({
            type: DAILYLOOK
        });
        axios.get('http://localhost:3003/data')
            .then(({ data }: AxiosResponse<Types.IProductTabItemsData>) => {
                dispatch({
                    type: PRODUCT_IS_FETCHED,
                    productTabItemsJSON: data
                });
            })
            .catch((err: Error) => {
                dispatch({
                    type: PRODUCT_IS_ERROR,
                    productTabItemsJSON: err
                });
            })
    }
}

export const fetchRankingTabItems = () => {
    return (dispatch: Dispatch): void => {
        dispatch({
            type: DAILYLOOK
        });
        axios.get('http://localhost:3004/data')
            .then(({ data }: AxiosResponse<Types.IRankingTabItemsData>) => {
                dispatch({
                    type: RANKING_IS_FETCHED,
                    rankingTabItemsJSON: data
                });
            })
            .catch((err: Error) => {
                dispatch({
                    type: RANKING_IS_ERROR,
                    rankingTabItemsJSON: err
                });
            })
    }
}

export const fetchItemsCall = () => (dispatch: Dispatch<any> ) => {
    return (
        dispatch(fetchProductTabItems()),
        dispatch(fetchRankingTabItems())
    )
}


