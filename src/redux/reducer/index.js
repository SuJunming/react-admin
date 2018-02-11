
import { combineReducers } from 'redux';
import * as type from '../type';

const defaultData = (state = {}, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
            return [1,2,3];
        default:
            return {...state};
    }
};

export default combineReducers({
    defaultData
});
