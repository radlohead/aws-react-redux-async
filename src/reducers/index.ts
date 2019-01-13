import { PRODUCT_TAB, DAILYLOOK } from '../actions';
import * as Types from '../types/Types';

const initialState = {
    currentTab: PRODUCT_TAB
}

const reducers = (state = initialState, action: Types.IDailyLook): Types.IDailyLook|{ currentTab: string }|undefined => {
    switch(action.type) {
        case DAILYLOOK:
            return {
                ...state,
                ...action
            }
    }
}

export default reducers;