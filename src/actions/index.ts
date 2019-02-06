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
    return async (dispatch: Dispatch) => {
        const response: AxiosResponse<Types.IProductTabItemsData> = await axios.get(`${types.BASEURL}/productTab`);
        try {
            dispatch({
                type: types.PRODUCT_IS_FETCHED,
                productTabItemsJSON: response.data
            });
        } catch(err) {
            dispatch({
                type: types.PRODUCT_IS_ERROR,
                productTabItemsJSON: err
            });
        }
    }
}

export const fetchRankingTabItems = () => {
    return async (dispatch: Dispatch) => {
        const response: AxiosResponse<Types.IRankingTabItemsData> = await axios.get(`${types.BASEURL}/rankingTab`);
        try {
            dispatch({
                type: types.RANKING_IS_FETCHED,
                rankingTabItemsJSON: response.data
            });
        } catch(err) {
            dispatch({
                type: types.RANKING_IS_ERROR,
                rankingTabItemsJSON: err
            });
        }
    }
}

export const fetchItemsCall = () => (dispatch: Dispatch<any> ) => {
    return (
        dispatch(fetchProductTabItems()),
        dispatch(fetchRankingTabItems())
    )
}


