import { PRODUCT_TAB, DAILYLOOK, PRODUCT_IS_FETCHED, RANKING_IS_FETCHED } from '../actions';
import * as Types from '../types/Types';

const initialState = {
    currentTab: PRODUCT_TAB,
    type: DAILYLOOK,
    productTabItemsJSON: [],
    rankingTabItemsJSON: []
}

const reducers = (state = initialState, action: Types.IDailyLook): Types.IDailyLook|{ currentTab: string }|undefined => {
    switch(action.type) {
        case DAILYLOOK:
        case PRODUCT_IS_FETCHED:
        case RANKING_IS_FETCHED:
            return {
                ...state,
                ...action
            }
        default:
            return state;
    }
}

export default reducers;