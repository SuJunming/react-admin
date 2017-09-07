import * as type from './type';

export const receiveData = (data, category) => ({
    type: type.ACCEPT_DATA,
    data,
    category
});