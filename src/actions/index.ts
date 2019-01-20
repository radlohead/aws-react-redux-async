import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';
import * as types from './ActionTypes';
import * as Types from '../types/Types';

export const currentTab = (tabName: string): Types.ICurrentTab => {
    return {
        type: types.DAILYLOOK,
        currentTab: tabName
    }
}

export const fetchProductTabItems = () => {
    return (dispatch: Dispatch): void => {
        dispatch({
            type: types.DAILYLOOK
        });
        axios.get('http://localhost:3003/data')
            .then(({ data }: AxiosResponse<Types.IProductTabItemsData>) => {
                dispatch({
                    type: types.PRODUCT_IS_FETCHED,
                    productTabItemsJSON: data
                });
            })
            .catch((err: Error) => {
                dispatch({
                    type: types.PRODUCT_IS_ERROR,
                    productTabItemsJSON: err
                });
            })
    }
}

export const fetchRankingTabItems = () => {
    return (dispatch: Dispatch): void => {
        dispatch({
            type: types.DAILYLOOK
        });
        axios.get('http://localhost:3004/data')
            .then(({ data }: AxiosResponse<Types.IRankingTabItemsData>) => {
                dispatch({
                    type: types.RANKING_IS_FETCHED,
                    rankingTabItemsJSON: data
                });
            })
            .catch((err: Error) => {
                dispatch({
                    type: types.RANKING_IS_ERROR,
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


