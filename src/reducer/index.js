
import { combineReducers } from 'redux';
import * as type from '../action/type';

const defaultData = (state = {}, action) => {
    switch (action.type) {
        case type.RECEIVE_DATA:
        case type.REQUEST_DATA:
            return {
                ...state,
                [action.category]: state[action.category]
            };
        default:
            return {...state};
    }
};

export default combineReducers({
    defaultData
});
