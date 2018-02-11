import * as type from '../type';

export const receiveData = data => ({
    type: type.REQUEST_DATA,
    data
});