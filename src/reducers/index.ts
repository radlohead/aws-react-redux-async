import { SELECT_TAB } from '../actions';

const reducers = (state = {}, action: any): any => {
    
    switch(action.type) {
        case SELECT_TAB:
        console.log('reducers', state, action);
            return {
                ...action
            }
    }
}

export default reducers;