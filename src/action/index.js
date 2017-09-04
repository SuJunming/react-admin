import * as type from './type';

export const receiveData = (data, category) => ({
    type: type.RECEIVE_DATA,
    data,
    category
});