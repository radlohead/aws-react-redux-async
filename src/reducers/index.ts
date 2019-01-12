import { SELECT_TAB } from '../actions';

const initialState = {
    currentTab: 'PRODUCT_TAB'
}

const reducers = (state = initialState, action: any): any => {
    switch(action.type) {
        case SELECT_TAB:
        console.log('reducers', state, action);
            return {
                ...state,
                ...action
            }
    }
}

export default reducers;