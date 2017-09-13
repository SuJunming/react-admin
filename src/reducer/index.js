
import { combineReducers } from 'redux';
import * as type from '../action/type';

const defaultData = (state = {}, action) => {
    if(action.type==type.REQUEST_DATA){
        console.log('111');
    }
    console.log(action.type);
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
