import * as type from './type';

export const receiveData = (data, category) => ({
    type: type.REQUEST_DATA,
    data,
    category
});