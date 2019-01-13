import { DAILYLOOK } from '../actions';

const initialState = {
    currentTab: 'PRODUCT_TAB'
}

const reducers = (state = initialState, action: any): any => {
    switch(action.type) {
        case DAILYLOOK:
            return {
                ...state,
                ...action
            }
    }
}

export default reducers;